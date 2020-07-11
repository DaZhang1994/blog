import { Component, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, GetPostQuery } from '../../API.service';
import { S3StorageService } from '../../s3storage/s3StorageService';

@Component({
  selector: 'app-thread-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  idSub: any;

  post: GetPostQuery;

  constructor(private readonly router: Router,
              private readonly route: ActivatedRoute,
              private readonly apiService: APIService,
              private readonly sanitizer: DomSanitizer,
              public readonly s3StorageService: S3StorageService) { }

  ngOnInit(): void {
    this.idSub = this.route.params.subscribe(async (params: any) => {
      this.post = await this.apiService.GetPost(params.id);

      if(this.post == null) {
        this.router.navigate(['404']).catch();
        return;
      }

      this.post.content = <string>this.sanitizer.bypassSecurityTrustHtml(this.post.content);
    });

  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }

}
