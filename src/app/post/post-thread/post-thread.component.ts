import { Component, OnInit } from '@angular/core';
import { APIService, SearchablePostSortableFields, SearchableSortDirection } from '../../API.service';

@Component({
  selector: 'app-post-category',
  templateUrl: './post-thread.component.html',
  styleUrls: ['./post-thread.component.scss']
})
export class PostThreadComponent implements OnInit {

  posts: any[] = [];

  nextToken: string;

  constructor(private readonly apiService: APIService) { }

  async ngOnInit() {
    // this.posts = this.apiService.ListPostsByThread()



  }

}
