import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PeriodicElement } from 'src/app/Models/PeriodicElement';
import {MatDialogModule  } from "@angular/material/dialog";

import { EmployeeEditComponent } from './employee-edit.component';
import { By } from '@angular/platform-browser';

import { RouterTestingModule } from '@angular/router/testing';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';


import {MatTableModule} from "@angular/material/table";
import { MatPaginatorModule } from "@angular/material/paginator";
import {MatSortModule} from '@angular/material/sort';
//Material Select Input and Realted Important Modules
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {  MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from "@angular/material/toolbar";
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from "@angular/material/datepicker/";
import { MatSnackBarModule } from "@angular/material/snack-bar";

describe('EmployeeEditComponent', () => {
  let component: EmployeeEditComponent;
  let fixture: ComponentFixture<EmployeeEditComponent>;

  beforeEach(async(() => {

    let spyObje=jasmine.createSpyObj('MatDialogRef',['close']);

    let element={
      "state": "Rajasthan",
      "city": "jaipur",
      "employeeID": 42,
      "firstName": "Pam",
      "lastName": "Buckner",
      "companyName": "VISALIA",
      "departmentName": "BULLJUICE",
      "address": "136 Wilson Avenue, 3905",
      "dob": "2015-03-10T03:15:48 -06:-30"
    };
    TestBed.configureTestingModule({
      imports:[MatDialogModule, MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
    BrowserModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSnackBarModule
],
      declarations: [ EmployeeEditComponent ],
      providers:[{provide: MatDialogRef, useValue:spyObje},{provide:MAT_DIALOG_DATA,useValue:element}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(component.employee).toBeTruthy();
  });

  it('Title is Employee Edit Section', () => {
    expect(component).toBeTruthy();
    let ele =fixture.debugElement.query(By.css('h2'));

    expect(ele.nativeElement.textContent).toBeTruthy();
    expect(ele.nativeElement.textContent).toBe('Employee Edit Section');
  });

  it('firstName is correctl populated', () => {
    expect(component).toBeTruthy();
    let ele =fixture.debugElement.query(By.css('#firstName'));

    expect(ele.nativeElement.value).toBe(component.employee.firstName);
    console.log('FirstName',ele.nativeElement.value,component.employee.firstName)
  });

  it('LastName is correctl populated', () => {
    expect(component).toBeTruthy();
    let ele =fixture.debugElement.query(By.css('#lastName'));

    expect(ele.nativeElement.value).toBe(component.employee.lastName);
    console.log('Last Name',ele.nativeElement.value,component.employee.lastName)
  });

  it('should close when Done is clicked',()=>{

    let cancelButton=fixture.debugElement.queryAll(By.css('mat-dialog-actions button'))[0];
    cancelButton.nativeElement.click();

    expect(component.dialogRef.close).toHaveBeenCalledTimes(1);
    expect(component.dialogRef.close).toHaveBeenCalledWith({ event: 'close',data: 'cancel',classType:String });


  })

  it('should close when Cancel is clicked',()=>{
    let DoneButton=fixture.debugElement.queryAll(By.css('mat-dialog-actions button'))[1];
    DoneButton.nativeElement.click();
    expect(component.dialogRef.close).toHaveBeenCalledTimes(1);
    expect(component.dialogRef.close).toHaveBeenCalledWith({ event: 'close', data:
    {firstName:component.firstName,lastName:component.lastName,dob:component.dob,state:component.state,city:component.city,departmentName:component.departmentName,companyName:component.companyName,employeeID:component.employeeID,address:component.address}
    , classType:PeriodicElement })
    console.log(DoneButton);
  })
});
