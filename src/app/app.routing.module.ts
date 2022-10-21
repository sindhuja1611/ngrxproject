import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './auth/home/home/home.component';
import { NavComponent } from './nav/nav.component';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { PostsListComponent } from './post/post-list/post.component';


const routes: Routes = [

  
    
 
    { path:'nav',component:NavComponent},
    { path:'home',component:HomeComponent},
    { path:'post',component:PostsListComponent,
    children:[
      
    { path:'add-post',component:AddPostComponent},
   { path:'edit-post',component:EditPostComponent},
  ]
  },
  { path: '', redirectTo: 'nav', pathMatch: 'full' },
  { path:'post',component:PostsListComponent},
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
