import { Component, OnInit } from '@angular/core';
import {BlogerService} from "../shared/bloger.service";
import {Bloger} from "../shared/bloger";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  bloger: Bloger;

  constructor(private blogerService: BlogerService, private router: Router) {
    this.bloger = blogerService.bloger;
  }

  ngOnInit() {
  }

  onSelect(article){

  }

  newPost(){
    this.router.navigate(['new-blog-post']);
  }
}
