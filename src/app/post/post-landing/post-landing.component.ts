import { Component, OnInit } from '@angular/core';
import { Post, Thread } from '../../../models';
import {
  APIService,
  SearchablePostSortableFields,
  SearchableSortDirection,
  SearchableThreadSortableFields,
  SearchPostsQuery,
  SearchThreadsQuery,
} from '../../API.service';
import { S3StorageService } from '../../s3storage/s3StorageService';

const NEWEST_LIMIT = 9;

@Component({
  selector: 'app-thread-landing',
  templateUrl: './post-landing.component.html',
  styleUrls: ['./post-landing.component.scss']
})
export class PostLandingComponent implements OnInit {

  posts: Post[] = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  postSliders: Post[][] = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];

  threads: Thread[] = [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined];
  threadRows: Thread[][] = [[undefined, undefined, undefined], [undefined, undefined, undefined], [undefined, undefined, undefined]];

  domParser: DOMParser = new DOMParser();

  constructor(private readonly apiService: APIService,
              public readonly s3StorageService: S3StorageService) {

  }

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
      { field: SearchablePostSortableFields.createdAt, direction: SearchableSortDirection.desc }, NEWEST_LIMIT)
      .then(({ items: posts }: SearchPostsQuery) => {
        this.posts = posts;
        this.postSliders = this.chunk(this.posts, 3);
      });
  }

  initThreads() {
    this.apiService.SearchThreads(
      undefined, { field: SearchableThreadSortableFields.createdAt, direction: SearchableSortDirection.asc }, NEWEST_LIMIT)
      .then(({ items: threads }: SearchThreadsQuery)=> {
        // @ts-ignore
        this.threads = threads;
        this.threadRows = this.chunk(this.threads, 3);
      });
  }

}
