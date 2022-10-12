import { createAction, props } from "@ngrx/store";

export const increment=createAction('increment');
export const decrement=createAction('deccrement');
export const reset=createAction('reset');

export const custom=createAction('custom',
props<{value:number}>()

);

export const change=createAction('change');