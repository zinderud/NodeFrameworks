import { Component } from '@angular/core';
import { HomePageComponent } from './homePageComponent/home-page.component';
import {BlogerService} from "./shared/bloger.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';

  constructor(public blogerService: BlogerService){
    this.blogerService.retrieveBloger();
  }
}
