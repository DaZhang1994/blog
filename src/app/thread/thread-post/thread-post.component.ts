import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Post } from '../../../models';
import { APIService, GetThreadQuery, SearchablePostSortableFields, SearchableSortDirection, SearchPostsQuery } from '../../API.service';
import { S3StorageService } from '../../s3storage/s3StorageService';

@Component({
  selector: 'app-thread-post',
  templateUrl: './thread-post.component.html',
  styleUrls: ['./thread-post.component.scss']
})
export class ThreadPostComponent implements OnInit, OnDestroy {

  idSub: Subscription;

  posts: Post[] = [];

  thread: GetThreadQuery;

  domParser: DOMParser = new DOMParser();

  constructor(private readonly router: Router,
              private readonly apiService: APIService,
              private readonly route: ActivatedRoute,
              public readonly s3StorageService: S3StorageService) {

  }

  ngOnInit() {
    this.idSub = this.route.params.subscribe(async (params: any) => {
      this.apiService.GetThread(params?.id)
        .then((thread: GetThreadQuery) => {
        this.thread = thread;
      })
        .catch(_ => {
          this.router.navigate(['404']);
        })

      this.apiService.SearchPosts(
        { threadID: { eq: params?.id } },
        { field: SearchablePostSortableFields.createdAt, direction: SearchableSortDirection.desc })
        .then(({ items: posts }: SearchPostsQuery) => {
          this.posts = posts;
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
