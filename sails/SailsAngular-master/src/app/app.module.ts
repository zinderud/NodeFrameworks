import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import {SailsModule} from "angular2-sails";
import { ViewMainComponent } from './views/main/view-main.component';
import { ViewEmployeeComponent } from './views/employee/view-employee.component';
import { ViewWsEmployeeComponent } from './views/ws-employee/view-ws-employee.component';
import { EmployeeService } from './services/employee.service';
import { WsEmployeeService } from './services/wsemployee.service';


@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeeComponent,
    ViewMainComponent,
    ViewWsEmployeeComponent,
  ],
  imports: [
    AlertModule.forRoot(),
	  BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    SailsModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    HttpModule // http://www.concretepage.com/angular-2/angular-2-http-post-example
  ],
  providers: [EmployeeService, WsEmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
