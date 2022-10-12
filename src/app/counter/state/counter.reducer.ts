import { createReducer, on } from "@ngrx/store";
import { change, custom, decrement, increment, reset } from "./counter.action";
import { initialState } from "./counter.state";

const countReducer=createReducer(initialState,
    on(increment,(state)=>{
        return{
            ...state,
            counter:state.counter+1,
        };
        
    }),
    
    on(decrement,(state)=>{
        return{
            ...state,
            counter:state.counter-1,
        };
        
    }),

    on(reset,(state)=>{
        return{
            ...state,
            counter:0,
        };
        
    }),

    on(custom,(state,action)=>{
        return{
            ...state,
            counter: state.counter + action.value,
        };
        
    }),
    on(change,state=>
    {
        return{
            ...state,
            Name: 'Hai Sindhuja',
        };
        
    })

    
    );
export function counterReducer(state:any,action:any)
{

return countReducer(state,action);
}