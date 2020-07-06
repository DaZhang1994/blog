import { Component, OnInit } from '@angular/core';
import { Storage } from 'aws-amplify';
import {
  APIService,
  GetPostQuery, GetThreadQuery,
  SearchablePostSortableFields,
  SearchableSortDirection,
  SearchableThreadSortableFields,
  SearchPostsQuery,
  SearchThreadsQuery,
} from '../../API.service';

class PostCard {
  title: string;
  abstract: string;
  link: string;
  featuredImg?: string;
}

class ThreadThumbnail {
  subject: string;
  link: string;
  featuredImg?: string
}

const NEWEST_LIMIT = 9;
const SLIDER_SIZE = 3;
const THREAD_ROW_SIZE = 3;

@Component({
  selector: 'app-thread-landing',
  templateUrl: './post-landing.component.html',
  styleUrls: ['./post-landing.component.scss']
})
export class PostLandingComponent implements OnInit {

  postCards: PostCard[] = [];
  postCardSliders: PostCard[][] = [[]];

  threadThumbnails: ThreadThumbnail[] = [];
  threadThumbnailRows: ThreadThumbnail[][] = [[]]

  domParser: DOMParser = new DOMParser();

  constructor(private readonly apiService: APIService) { }

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  ngOnInit() {
    this.initPosts();
    this.initThreads();
  }

  initPosts() {
    this.apiService.SearchPosts(
      undefined,
      {
        field: SearchablePostSortableFields.createdAt,
        direction: SearchableSortDirection.desc
      },
      NEWEST_LIMIT)
      .then( ({ items: posts }: SearchPostsQuery) => {
        posts.map((post: GetPostQuery) => {
          const card: PostCard = new PostCard();
          this.postCards.push(card);
          Storage.get(post.featuredImg).then((featuredImg: string) => card.featuredImg = featuredImg);
          card.title = post.title;
          card.link = post.id;
          card.abstract = this.domParser.parseFromString(post.content, 'text/html')?.querySelector('p')?.innerText?.substring(0, 400) + '...';
        });
        this.postCardSliders = this.chunk(this.postCards, SLIDER_SIZE);
      });
  }

  initThreads() {
    this.apiService.SearchThreads(
      undefined,
      {
        field: SearchableThreadSortableFields.createdAt,
        direction: SearchableSortDirection.asc
      },
      NEWEST_LIMIT)
      .then( ({ items: threads }: SearchThreadsQuery) => {
        threads.map((thread: GetThreadQuery) => {
          const threadThumbnail: ThreadThumbnail = new ThreadThumbnail();
          this.threadThumbnails.push(threadThumbnail);
          Storage.get(thread.featuredImg).then((featuredImg: string) => threadThumbnail.featuredImg = featuredImg);
          threadThumbnail.subject = thread.subject;
          threadThumbnail.link = thread.id;
        })
        this.threadThumbnailRows = this.chunk(this.threadThumbnails, THREAD_ROW_SIZE);
      });
  }

}
