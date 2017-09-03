import {Routes, RouterModule} from '@angular/router';
import {HomePageComponent} from "./homePageComponent/home-page.component";
import {AdminLoginComponent} from "./adminLoginComponent/admin-login.component";
import {SignUpComponent} from "./signUpComponent/sign-up.component";
import {BlogerSignInComponent} from "./bloger-sign-in/bloger-sign-in.component";
import {ProfileComponent} from "./profile/profile.component";
import {CanActivateViaAuthGuard} from "./shared/guards/can-activate-via-auth.guard";
import {NewBlogPostComponent} from "./new-blog-post/new-blog-post.component";

const appRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'admin',
    component: AdminLoginComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path: 'bloger-sign-in',
    component: BlogerSignInComponent
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [
      CanActivateViaAuthGuard
    ]
  },
  {
    path: 'new-blog-post',
    component: NewBlogPostComponent,
    // canActivate: [
    //   CanActivateViaAuthGuard
    // ]
  },
  {
    path: '**',
    redirectTo: '/',
    pathMatch: 'full'
  }

];

export const routing = RouterModule.forRoot(appRoutes);
