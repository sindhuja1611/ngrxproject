import { createReducer, on } from "@ngrx/store";
import {  deletePost, updatePost ,loadPostsSuccess, addPostSuccess, updatePostSuccess, deletePostSuccess} from "./posts.action";
import { initialState } from "./posts.state";

const postreducer=createReducer(
    initialState,
    
    on(addPostSuccess,(state,action) =>{
    
    let post={...action.post};

    

        return{
        ...state,
        post:[...state.post,post],
    };
}),

on(updatePostSuccess,(state,action) =>{
    
    
const updatedposts=state.post.map((post:any)=>
{
    return action.post.id===post.id? action.post:post;
});

        return{
        ...state,
        post:updatedposts,
    };

}),
on(deletePostSuccess,(state,{id}) =>{
    
    
    const updatedposts=state.post.filter(post=>
    {
        
        return post.id !== id;
       
    });
    
            return{
            ...state,
            post:updatedposts,
        };
    
    }),
    
on(loadPostsSuccess,(state,action)=>{
    return{
        ...state,
        
        post:action.posts,
    }
})

)

export function postReducer(state:any,action:any){
    return postreducer(state,action);

}