import { Component, OnInit } from '@angular/core';
import {BlogerService} from "../shared/bloger.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-bloger-sign-in',
  templateUrl: './bloger-sign-in.component.html',
  styleUrls: ['./bloger-sign-in.component.scss']
})
export class BlogerSignInComponent implements OnInit {

  constructor(private blogerService: BlogerService,
              private router: Router) { }

  ngOnInit() {
  }

  login: string;
  password: string;

  signIn(){
    this.blogerService.signIn(this.login, this.password).subscribe(data => {
      if(data){
        this.blogerService.saveBloger(data);
        this.router.navigate(['profile']);
      }else{
        console.log("wrong");
      }
    });
  }
}
