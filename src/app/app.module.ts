import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter/counter.component';
import { CounterOutputComponent } from './counter/counter-output/counter-output.component';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './counter/state/counter.reducer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomComponent } from './counter/custom/custom.component';
import { HomeComponent } from './auth/home/home/home.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

import { appReducer } from './appstate/app.state';
import { EffectsModule } from '@ngrx/effects';
import { PostsListComponent } from './post/post-list/post.component';
import { postReducer } from './post/state/posts.reducer';
import { AddPostComponent } from './post/add-post/add-post.component';
import { EditPostComponent } from './post/edit-post/edit-post.component';
import { AppRoutingModule } from './app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AuthEffects } from './auth/state/auth.effects';
import { AuthReducer } from './auth/state/auth.reducer';
import { AUTH_STATE_NAME } from './auth/state/auth.selector';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    CounterOutputComponent,
    CounterButtonComponent,
    CustomComponent,
    HomeComponent,
    PostsListComponent,
    AddPostComponent,
    EditPostComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    EffectsModule.forRoot(),
    EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),
    StoreModule.forRoot(appReducer),
    StoreDevtoolsModule.instrument({  logOnly: environment.production }),
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
