import { createReducer, on } from "@ngrx/store";
import { loginsuccess } from "./auth.action";

import { initialState } from "./auth.state";

const authreducer=createReducer(
    initialState,
    
  on(loginsuccess,(state,action)=>
  {
    return{
        ...state,
        user:action.user,
    }
  })
);





export function AuthReducer(state:any,action:any){
    return authreducer(state,action);

}