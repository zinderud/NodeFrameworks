import { Component, OnInit } from '@angular/core';
import {Bloger} from "../shared/bloger";
import {BlogerService} from "../shared/bloger.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sign-up',
    templateUrl: './sign-up.component.html',
    styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  constructor(private blogerService: BlogerService, private router: Router) { }

  ngOnInit() { }

  bloger = {
    login: "",
    photoUrl: "",
    password: ""
  }

  registerBloger(){
    this.blogerService.registerBloger(this.bloger).subscribe(data => {
      this.blogerService.saveBloger(data);
      this.router.navigate(['profile']);
    });
  }



}
