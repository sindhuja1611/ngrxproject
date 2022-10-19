import { Post } from "src/app/model/post.model";


export interface postState{

    post:Post[];
}

export const initialState:postState=
{
    post:[],
};