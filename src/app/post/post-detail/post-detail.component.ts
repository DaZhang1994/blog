import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService, GetPostQuery } from '../../API.service';
import { Storage } from 'aws-amplify'

@Component({
  selector: 'app-thread-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit, OnDestroy {

  idSub: any;

  post: GetPostQuery;

  featuredImg: string;

  constructor(private readonly router: Router, private readonly route: ActivatedRoute, private readonly apiService: APIService) { }

  ngOnInit(): void {
    this.idSub = this.route.params.subscribe(async (params: any) => {
      this.post = await this.apiService.GetPost(params.id);
      if(!this.post) {
        this.router.navigate(['404']).catch();
        return;
      }
      Storage.get(this.post.featuredImg).then((featuredImg: string) => this.featuredImg = featuredImg);
    });

  }

  ngOnDestroy() {
    this.idSub.unsubscribe();
  }

}
