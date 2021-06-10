import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { By } from '@angular/platform-browser';
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
import { EmployeeEditComponent } from './Dialog/employee-edit/employee-edit.component';
import {MatDialog, MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from "@angular/material/datepicker/";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

describe('AppComponent', () => {


  beforeEach(async(() => {
    let matDialogSPy=jasmine.createSpyObj('MatDialog',['open']);
    let snakcSPy=jasmine.createSpyObj('MatSnackBar',['open']);
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatDialogModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
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
      declarations: [
        AppComponent
      ],
      providers:[{provide:MatDialog,useValue:matDialogSPy}, {provide:MatSnackBar,useValue:snakcSPy}]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });


  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app=fixture.componentInstance;

    const ele= fixture.debugElement.query(By.css('mat-form-field mat-label'));
    expect(ele.nativeElement.textContent).toBe('Search Employee');




  });
});
