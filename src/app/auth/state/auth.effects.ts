import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { exhaustMap, map } from "rxjs";
import { AuthService } from "src/app/service/auth.service";
import { loginstart, loginsuccess } from "./auth.action";

@Injectable()
export class AuthEffects{
    constructor(private action$:Actions,private authService:AuthService,private router: Router){}
    login$ = createEffect(() => {
        return this.action$.pipe(
          ofType(loginstart),
          exhaustMap((action) => {
            return this.authService.login(action.email, action.password).pipe(
              map((data) => {
              
               const user=this.authService.formatUser(data);
               this.router.navigate(['/post']);
                return loginsuccess({user});

     

              }),
            );
            
             })
        );
    })
}