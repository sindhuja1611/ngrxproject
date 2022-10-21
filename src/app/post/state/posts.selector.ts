import { createFeatureSelector, createSelector } from "@ngrx/store";

import { postState} from "./posts.state";

export const POST_STATE_NAME = 'posts';
const getPostsState=createFeatureSelector<postState>(POST_STATE_NAME);

export const getPosts= createSelector(getPostsState,
    state=>{
  
    return state.post;

});

export const getPostById= createSelector(getPostsState,(state:any,props:any)=>{
    console.log(props);
    return state.post.find((post:any)=> post.id===props);

});
