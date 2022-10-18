import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home/home.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostsListComponent } from './post/post-list/post.component';


const routes: Routes = [

  {
    path:'',
    component:PostsListComponent,
   children:[
    { path:'home',component:HomeComponent},
    { path:'add-post',component:AddPostComponent},
   { path:'edit-post',component:EditPostComponent},

   ]
  },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
