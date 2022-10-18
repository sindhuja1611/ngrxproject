import { AuthReducer } from "../auth/state/auth.reducer";
import { AuthState } from "../auth/state/auth.state";
import { counterReducer } from "../counter/state/counter.reducer";
import { CounterState } from "../counter/state/counter.state";
import { postReducer } from "../post/state/posts.reducer";
import { postState } from "../post/state/posts.state";


export interface AppState{

    counter:CounterState,
    post:postState,
auth:AuthState


}

export const appReducer={
    counter:counterReducer,
    post:postReducer,
    auth:AuthReducer

    
}