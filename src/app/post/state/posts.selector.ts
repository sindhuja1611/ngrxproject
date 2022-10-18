import { createFeatureSelector, createSelector } from "@ngrx/store";

import { postState } from "./posts.state";


const getPostsState=createFeatureSelector<postState>('post');

export const getPosts= createSelector(getPostsState,state=>{
    return state.post;

});

export const getPostById= createSelector(getPostsState,(state:any,props:any)=>{
    console.log(props);
    return state.post.find((post:any)=> post.id===props);

});
