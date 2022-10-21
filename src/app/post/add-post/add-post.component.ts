
import { Post } from 'src/app/model/post.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appstate/app.state';
import { addPost } from '../state/posts.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css'],
})
export class AddPostComponent implements OnInit {
  postForm!: FormGroup;

  constructor(private store: Store<AppState>,private router: Router) {}

public title?:string;
public description?:string;
  ngOnInit():void{
    this.postForm=new FormGroup({
  
      title: new FormControl(null,[
        Validators.required,
        Validators.minLength(6),
        
      ]),
      description: new FormControl(null,[
        Validators.required,
        Validators.minLength(10),
        
      ]),
    })
  }
  

  onAddPost() {
   

    const post: Post = {
      title: this.postForm?.value.title,
      description: this.postForm?.value.description,
    };
    console.log(post);
    this.store.dispatch(addPost({ post }));

  }
}
