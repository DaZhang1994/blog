import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage } from 'aws-amplify';
import {
  APIService,
  GetPostQuery,
  GetThreadQuery,
  SearchablePostSortableFields,
  SearchableSortDirection,
  SearchPostsQuery,
} from '../../API.service';


class PostItem {
  title: string;
  abstract: string;
  featuredImg: string;
  link: string;
  createdAt: string;
}

@Component({
  selector: 'app-thread-post',
  templateUrl: './thread-post.component.html',
  styleUrls: ['./thread-post.component.scss']
})
export class ThreadPostComponent implements OnInit, OnDestroy {

  idSub: any;

  posts: GetPostQuery[] = [];

  postItems: PostItem[] = [];

  domParser: DOMParser = new DOMParser();

  threadSubject: string;

  constructor(private readonly router: Router,private readonly apiService: APIService, private readonly route: ActivatedRoute) { }

  ngOnInit() {
    this.idSub = this.route.params.subscribe(async (params: any) => {
      this.apiService.GetThread(params?.id)
        .then((thread: GetThreadQuery) => {
        this.threadSubject = thread.subject;
      })
        .catch(_ => {
          this.router.navigate(['404']);
        })

      this.apiService.SearchPosts(
        {
          threadID: {
            eq: params?.id
          }
        },
        {
          field: SearchablePostSortableFields.createdAt,
          direction: SearchableSortDirection.desc
        })
        .then(({ items: posts }: SearchPostsQuery) => {
          posts.map((post: GetPostQuery) => {
            const postItem: PostItem = new PostItem();
            this.postItems.push(postItem);
            Storage.get(post.featuredImg).then((featuredImg: string) => postItem.featuredImg = featuredImg);
            postItem.title = post.title;
            postItem.link = post.id;
            postItem.abstract = this.domParser.parseFromString(post.content, 'text/html')?.querySelector('p')?.innerText?.substring(0, 400) + '...';
            postItem.createdAt = post.createdAt;
          });
        })
        .catch(_ => {
          this.router.navigate(['404']);
        })
    });

  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }
}
