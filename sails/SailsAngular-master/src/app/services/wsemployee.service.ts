import { Injectable } from '@angular/core';
import { SailsModule, SailsService } from "angular2-sails";
import { Employee } from '../models/employee';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WsEmployeeService {

  constructor(private _sailsService: SailsService) {
    let opts = {
//      url: "http://localhost:1337",
      transports: ['polling', 'websocket']
    }
    this._sailsService.connect(opts);
  }
  private url = '/employee/';
  
  // Fetch all existing employees
  getEmployees(): Observable<Employee[]> {
    console.log('i am the function getEmployees into service EmployeeService');
    // ...using get request
    return this._sailsService.get(this.url)
      // ...and calling .json() on the response to return data
      .map((res: any ) => {
        console.log('vedo', res);
        console.log('body', res.data);
        return res.data;
      })
      //...errors if any
      .catch((error: any) => Observable.throw(error || 'Server error'));
  }

  addEmployeeWithObservable(employee: Employee): Observable<Employee> {
    console.log('i am addEmployee function into service EmployeeService');
    console.log(this.url + 'create');
    return this._sailsService.post(this.url + 'create', employee)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  updateEmployeeWithPromise(employee: Employee): Promise<Employee> {
    return this._sailsService.post(this.url + 'update/' + employee.id, employee).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  deleteEmployeeWithPromise(id: number): Promise<Employee> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    return this._sailsService.delete(this.url + id).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  deleteEmployeeWithObservable(id: number): Observable<Employee> {
    return this._sailsService.delete(this.url + id)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: any) {
    console.log('ricevo', res);
    //let body = res.json();
    //return body || {};
    return res.data || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

  
}
