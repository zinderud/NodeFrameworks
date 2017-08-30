import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {BlogerService} from "../bloger.service";

@Injectable()
export class CanActivateViaAuthGuard implements CanActivate {

  constructor(private blogerService: BlogerService,
              private router: Router) {}

  canActivate() {
    let bool = this.blogerService.isLoggedIn();
    if(!bool){
      this.router.navigate(['bloger-sign-in']);
    }
    return bool;
  }
}
