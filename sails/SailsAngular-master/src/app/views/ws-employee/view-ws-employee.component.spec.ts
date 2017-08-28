import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewWsEmployeeComponent } from './view-ws-employee.component';

describe('ViewWsEmployeeComponent', () => {
  let component: ViewWsEmployeeComponent;
  let fixture: ComponentFixture<ViewWsEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewWsEmployeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewWsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
