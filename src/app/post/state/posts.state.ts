import { Post } from "src/app/model/post.model";


export interface postState{

    post:Post[];
}

export const initialState:postState=
{
    post:[
        {
            id:'1',title:'Shirt',description:'fashion'
        },

        {
            id:'2',title:'Baby Horses',description:'toys'
        },
    ],
};
