import { Component, OnInit } from '@angular/core';
import { Post } from '../../../models';
import { APIService } from '../../API.service';
import { Storage } from 'aws-amplify'

class Card {
  title: string;
  abstract: string;
  link: string;
  featuredImg?: string | Object;
}

const NEWEST_LIMIT = 9;
const SLIDER_SIZE = 3;

@Component({
  selector: 'app-thread-landing',
  templateUrl: './post-landing.component.html',
  styleUrls: ['./post-landing.component.scss']
})
export class PostLandingComponent implements OnInit {

  newestPosts: Post[];
  cards: Card[] = [];
  sliders: Card[][] = [[]];
  domParser: DOMParser = new DOMParser();

  constructor(private readonly apiService: APIService) { }

  chunk(arr: any, chunkSize:any) {
    let R = [];
    for (let i = 0, len = arr.length; i < len; i += chunkSize) {
      R.push(arr.slice(i, i + chunkSize));
    }
    return R;
  }

  async ngOnInit() {
    this.newestPosts = (await this.apiService.ListPosts(undefined, NEWEST_LIMIT)).items;

    this.newestPosts.map((post: Post) => {
      const card = new Card();
      this.cards.push(card);
      Storage.get(post.featuredImg).then((featuredImg: string) => card.featuredImg = featuredImg);
      card.title = post.title;
      card.link = post.id;
      card.abstract = this.domParser.parseFromString(post.content, 'text/html')?.querySelector('p')?.innerText?.substring(0, 400) + '...';
    })

    this.sliders = this.chunk(this.cards, SLIDER_SIZE);
  }

}
