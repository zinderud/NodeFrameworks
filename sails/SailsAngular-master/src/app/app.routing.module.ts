import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewMainComponent } from './views/main/view-main.component';
import { ViewEmployeeComponent } from './views/employee/view-employee.component';
import { ViewWsEmployeeComponent } from './views/ws-employee/view-ws-employee.component';

/*
You can create a new view using these DOS commands:

cd /directory of my project
for example cd /SingleAppPage

cd /src/app/views
ng generate component viewPageNotFound
cls
dir
rename view-page-not-found page-not-found
cd /directory of my project

*/

//import { ViewPageNotFoundComponent } from './views/page-not-found/view-page-not-found.component';


// Define the routes
export const routes = [
  { //It associates the url / with the view ViewMainComponent
    path: '',
    data: ['Getting started'],
    component: ViewMainComponent
  },
  { //It associates the url /employee with the view ViewEmployeeComponent
    path: 'employee',
    data: ['Employee'],
    component: ViewEmployeeComponent
  },
  { //It associates the url /employee with the view ViewWsEmployeeComponent
    path: 'wsemployee',
    data: ['WS Employee'],
    component: ViewWsEmployeeComponent
  },
  { //Redirect urls not found at root
    path: '**',
    redirectTo: '/'
  }
  //It would be best to create a page dedicated to this work
  //	{ path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports: [
    //RouterModule.forRoot(appRoutes)
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
