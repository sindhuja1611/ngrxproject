import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { loginstart, loginsuccess } from "./auth.action";

@Injectable()
export class AuthEffects{
    constructor(private action$:Actions,private authService:AuthService){}
    login$ = createEffect(() => {
        return this.action$.pipe(
          ofType(loginstart),
          exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(
              map((data) => {
              
               const user=this.authService.formatUser(data);
                return loginsuccess({user});
              }),
            );
            
             })
        );
    })
}