import { createReducer, on } from "@ngrx/store";
import { addPost, deletePost, updatePost } from "./posts.action";
import { initialState } from "./posts.state";

const postreducer=createReducer(
    initialState,
    
    on(addPost,(state,action) =>{
    
    let post={...action.post};

    post.id=(state.post.length +1).toString();

        return{
        ...state,
        post:[...state.post,post],
    };
}),

on(updatePost,(state,action) =>{
    
    
const updatedposts=state.post.map((post:any)=>
{
    return action.post.id===post.id? action.post:post;
});

        return{
        ...state,
        post:updatedposts,
    };

}),
on(deletePost,(state,{id}) =>{
    
    
    const updatedposts=state.post.filter(post=>
    {
        
        return post.id !== id;
       
    });
    
            return{
            ...state,
            post:updatedposts,
        };
    
    }),
    

)

export function postReducer(state:any,action:any){
    return postreducer(state,action);

}