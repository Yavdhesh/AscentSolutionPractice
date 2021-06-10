import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement  } from "./Models/PeriodicElement";
import {ELEMENT_DATA,columIdAndValue} from './DummyData/DummyEmployeeData'
import { MatDialog } from '@angular/material/dialog';
import { EmployeeEditComponent } from './Dialog/employee-edit/employee-edit.component';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayedColumns: string[] =[];
  columnidAndValue=[];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  //Material table sorting and pagination settings
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(public dialog: MatDialog,private snackBar: MatSnackBar){}

  ngOnInit(){
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.columnidAndValue=columIdAndValue;
    this.displayedColumns=columIdAndValue.map(colIdVal=>colIdVal.id);
    //Custom filter according to name column
    this.dataSource.filterPredicate = (data:
      PeriodicElement, filterValue: string) =>{

       let elementString=data.employeeID+data.firstName+data.lastName+data.companyName+data.departmentName+data.dob+data.city+data.state;

     return elementString.trim().toLowerCase().indexOf(filterValue) !== -1};
  }

  onChange(getName)
  {
      this.dataSource.filter = getName.trim().toLowerCase();
  }

  getRecord(element)
  {

    const dialogRef = this.dialog.open(EmployeeEditComponent,{
      data:element,
      disableClose:true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
     if(result.classType == PeriodicElement){
      console.log(`Dialog result: ${result}`);
      console.log(`make http call`);
      this.snackBar.open('Employee updated', 'Close');

     }else if( result.classType == String){
       console.log('string hai ji');
       this.snackBar.open('You did not update anything', 'Close');
     }else{
      console.log('string nhi hai galat galkat');

     }

    });
  }


}

//Material Table Data Settings

