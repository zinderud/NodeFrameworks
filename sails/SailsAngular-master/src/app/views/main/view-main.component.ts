/*
I have created this view using the dos command:
ng generate component viewEmployee

and then i putted the view into;
/src/app/app.routing.module.ts
*/

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-view-main',
  templateUrl: './view-main.component.html',
  //styleUrls: ['./view-main.component.scss']
  styles: [`
:host >>> .alert-md-local {
  background-color: #009688;
  border-color: #00695C;
  color: #fff;
}
`]
})
export class ViewMainComponent implements OnInit {
  title = 'app';

  constructor(private router: Router) { }

  ngOnInit() {
  }


  goEmployeeDemo() {
    this.router.navigate(['/employee']);
  }

  goWsEmployeeDemo() {
    this.router.navigate(['/wsemployee']);
  }

}
