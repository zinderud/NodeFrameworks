/*
I have created this view using the dos command:
ng generate component viewWsEmployee

and then i putted the view into;
/src/app/app.routing.module.ts
*/

import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { WsEmployeeService } from '../../services/wsemployee.service';
import { ISubscription } from "rxjs/Subscription";
import { Employee } from '../../models/employee';

@Component({
  selector: 'app-view-ws-employee',
  templateUrl: './view-ws-employee.component.html',
  styleUrls: ['./view-ws-employee.component.css']
})

export class ViewWsEmployeeComponent implements OnInit {
  public data: Employee[];
  public on: boolean = false;
  public myId: number = 0;
  private iscrizioneLoadData: ISubscription;

  constructor(private employeeService: WsEmployeeService, private zone: NgZone) { }

  ngOnInit() {
    this.loadData();
  }

  ngOnDestroy() {
    //console.log('ngOnDestroy');
    this.iscrizioneLoadData.unsubscribe();
  }

  loadData() {
    var that = this;
    // Get all data
    this.iscrizioneLoadData = this.employeeService.getEmployees()
      .subscribe(
      v => {
        console.log('i see ');
        console.log(v);
        this.zone.run(() => { // <== added serve per quando il servizio cambia qualche record, viene fatto il refresh della view. Ad esempio quando creo un record questo è inizialmente in process, dopo 5 secondi arriva il risultato del salvataggio
          that.data = v;
          that.on = (that.data.length > 0);
          if(that.on){
            that.myId = that.data[that.data.length-1].id;
            console.log('my new id is :', that.myId);
          }
        });
      }, //Bind to view
      error => {
        // Log errors if any
        console.log(error);
        alert(error);
      });
  }

  addRecord() {
    console.log('i am addRecord function ');
    var rec: Employee = new Employee();
    rec.fullname = 'Gino';
    rec.emailid = 'gino@pino.it';
    rec.phonenumber = '+39 333 921 77 30';

    this.employeeService.addEmployeeWithObservable(rec)
      .subscribe(book => {
        this.loadData();
        console.log(book);
      },
      error => {
        console.error(error);
      });

  }
  

  updateRecord() {
    console.log('i am updateRecord function ');
    var rec: Employee = new Employee();
    rec.id = this.myId;
    rec.fullname = 'Giancarlo';
    rec.emailid = 'giancarlo@pino.it';
    rec.phonenumber = '+39 335 888 77 66';

    this.employeeService.updateEmployeeWithPromise(rec)
      .then(book => {
        this.loadData();
      },
      error => {
        console.error(error);
        alert(error);
      });
  }



  deleteRecord() {
    console.log('i am deleteRecord function ');

    this.employeeService.deleteEmployeeWithPromise(this.myId)
      .then(book => {
        this.loadData();
      },
      error => {
        console.error(error);
        alert(error);
      });
  }
  
}
