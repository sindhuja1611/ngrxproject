import { getPosts } from './../state/posts.selector';

import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appstate/app.state';
import { deletePost, loadPosts } from '../state/posts.action';
import { Post } from 'src/app/model/post.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts-list',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostsListComponent implements OnInit {
  posts?: Observable<Post[]>;
  cnt?: Observable<Post[]>;

  constructor(private store: Store<AppState>,private router: Router) {}

  ngOnInit(): void {

    this.posts = this.store.select(getPosts);

   // this.count = this.store.select(getCount);
    this.store.dispatch(loadPosts());
  
  }

  onDeletePost(id: string) {
    if (confirm('Are you sure you want to delete')) {
      this.store.dispatch(deletePost({ id }));
      console.log(id);
    }

  }


}