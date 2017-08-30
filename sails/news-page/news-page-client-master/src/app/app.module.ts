import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from "./app.routing";
import {HomePageComponent} from "./homePageComponent/home-page.component";
import {AdminLoginComponent} from "./adminLoginComponent/admin-login.component";
import {SignUpComponent} from "./signUpComponent/sign-up.component";
import { BlogerSignInComponent } from './bloger-sign-in/bloger-sign-in.component';
import {BlogerService} from "./shared/bloger.service";
import { ProfileComponent } from './profile/profile.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import {PostService} from "./shared/post.service";
import {CanActivateViaAuthGuard} from "./shared/guards/can-activate-via-auth.guard";
import { NewBlogPostComponent } from './new-blog-post/new-blog-post.component';
import {CKEditorModule} from "ng2-ckeditor";

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AdminLoginComponent,
    SignUpComponent,
    BlogerSignInComponent,
    ProfileComponent,
    ArticlesListComponent,
    NewBlogPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    CKEditorModule
  ],
  providers: [Window, BlogerService, PostService, CanActivateViaAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
