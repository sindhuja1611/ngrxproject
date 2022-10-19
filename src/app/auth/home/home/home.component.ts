import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appstate/app.state';
import { loginstart } from '../../state/auth.action';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postForm!: FormGroup;
  post: any;
  constructor(private store:Store<AppState>,private router: Router) { }

  ngOnInit(): void {
    this.postForm=new FormGroup({
  
      email: new FormControl('',[
        Validators.required,
        Validators.email,
        
      ]),
      password: new FormControl('',[
        Validators.required,
     
        
      ]),
    })
  }

  Login()
    {
     
     const email=this.postForm.value.email;
     const password=this.postForm.value.password;

      this.store.dispatch(loginstart({email,password}));
    
      this.log();

    }
 log()
 {
  this.router.navigate(['/post']);

 }
  }


  
