import { Component, createPlatform, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/appstate/app.state';
import { Post } from 'src/app/model/post.model';
import { updatePost } from '../state/posts.action';
import { getPostById } from '../state/posts.selector';

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  postForm!: FormGroup;
post!:Post;
  constructor(private store: Store<AppState>,private route: ActivatedRoute,) {}
id?:string
title?:string;
description?:string;
  ngOnInit():void{


    this.route.queryParams
      .subscribe(params => {
        console.log(params); // { orderby: "price" }
        this.id = params['prop'];
        
        const value=this.id;
        console.log(value); 
        this.store.select(getPostById,(value)).subscribe((data)=>
          {
               this.post=data;
               console.log(data); 
              this.create();
          });

         
      }

    );
    }
    create()
    {
      this.postForm=new FormGroup({
  
        title: new FormControl(this.post.title,[
          Validators.required,
          Validators.minLength(6),
          
        ]),
        description: new FormControl(this.post.description,[
          Validators.required,
          Validators.minLength(10),
          
        ]),
      })
    }

  

  onUpdatePost(){
   const title=this.postForm?.value.title;
    const description=this.postForm?.value.description;
    const post: Post = {
      id: this.post.id,
      title,
      description,
    };
   
    this.store.dispatch(updatePost({ post }));
  
  }

}