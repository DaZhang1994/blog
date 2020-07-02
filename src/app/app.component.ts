import { Component, OnInit } from '@angular/core';
import { APIService } from './API.service';
import { Storage } from 'aws-amplify'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  threads: any;

  constructor(private apiService: APIService) {}

  async ngOnInit() {
    this.apiService.ListThreads().then((evt) => {
      this.threads = evt.items;
    });

    this.apiService.OnCreateThreadListener.subscribe((evt) => {
      const data = (evt as any).value.data.onCreateThread;
      this.threads = [...this.threads, data];
    });
  }

  async createTodo() {
    Storage.put('test.txt', 'Hello')
      .then (result => console.log(result)) // {key: "test.txt"}
      .catch(err => console.log(err));

    // await DataStore.save(new Post({
    //   title: 'testPost',
    //   content: 'testContent'
    // }));
    //
    // const posts = await DataStore.query(Post);
    // console.log(posts)

    // this.apiService.CreateThread({
    //   subject: 'testSubject'
    // });
    // this.apiService.CreatePost({
    //   threadID: '58067761-3ee0-4dde-af96-20165df17d50',
    //   title: 'testPost',
    //   content: 'testContent'
    // })
    // this.apiService.DeletePost({
    //   id: '4f533881-da7e-433e-9621-54f31f1ca373'
    // })
  }


}

