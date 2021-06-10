import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import {MatDialogModule } from '@angular/material/dialog';
import {MatDatepickerModule} from "@angular/material/datepicker/";
import { MatSnackBarModule } from "@angular/material/snack-bar";

@NgModule({
  declarations: [
    AppComponent,
    EmployeeEditComponent
  ],
  imports: [
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
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  entryComponents:[EmployeeEditComponent]
})
export class AppModule { }
