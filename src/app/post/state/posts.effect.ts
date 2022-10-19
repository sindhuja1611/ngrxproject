

import { Store } from '@ngrx/store';
//import { Update } from '@ngrx/entity';

import {

  map,
  mergeMap,
  switchMap,

} from 'rxjs/operators';
import {


    addPost,
    updatePost,
    
  addPostSuccess,
  loadPosts,
  loadPostsSuccess,
  updatePostSuccess,
  deletePostSuccess,
  deletePost,


} from './posts.action';

import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';



import { AppState } from 'src/app/appstate/app.state';
import { PostsService } from 'src/app/service/posts.service';

@Injectable()
export class PostsEffects {
  constructor(
    private actions$: Actions,
    private postsService: PostsService,
    private store: Store<AppState>
  ) {}

  
  loadPosts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadPosts),
      mergeMap((action)=>{
        return this.postsService.getPosts().pipe(
            map((posts)=>{

                console.log(posts);
               return loadPostsSuccess({posts})
            })
        )
      })
    )
  })

  addPost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(addPost),
      mergeMap((action) => {
        return this.postsService.addPost(action.post).pipe(
          map((data) => {
            const post = { ...action.post, id: data.name };
            return addPostSuccess({ post });
          })
        );
      })
    );
  });

  updatePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(updatePost),
      switchMap((action) => {
        return this.postsService.updatePost(action.post).pipe(
          map((data) => {
            // const updatedPost: Update<Post> = {
            //   id: action.post.id,
            //   changes: {
            //     ...action.post,
            //   },
            // };
            return updatePostSuccess({ post: action.post });
          })
        );
      })
    );
  });


  deletePost$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(deletePost),
      switchMap((action) => {
        return this.postsService.deletePost(action.id).pipe(
          map((data) => {
            return deletePostSuccess({ id: action.id });
          })
        );
      })
    );
  });

  
}

