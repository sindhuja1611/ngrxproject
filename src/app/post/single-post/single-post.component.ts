import { getPostById } from './../state/posts.selector';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/model/post.model';
import { AppState } from 'src/app/appstate/app.state';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css'],
})
export class SinglePostComponent implements OnInit {
  post?: Observable<Post>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.post = this.store.select(getPostById);
  }
}