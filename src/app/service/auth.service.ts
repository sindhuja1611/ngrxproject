import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../model/AuthModel";
import { User } from "../model/user.model";

@Injectable({
    providedIn: 'root',
  })
  export class AuthService {
    timeoutInterval: any;
    constructor(private http: HttpClient) {}
  
    login(email: string, password: string):Observable<AuthResponse> {
        console.log("hai");
      return this.http.post<AuthResponse>(
        `

        https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.FIREBASE_API_KEY}`,
        { email, password, returnSecureToken: true }
      );
    }

    formatUser(data:AuthResponse){
        const expirationDate=new Date(new Date().getTime() + +data.expiresIn *1000);
        const user=new User(data.email,data.idToken,data.localId,expirationDate);
        return user;
    }
  }