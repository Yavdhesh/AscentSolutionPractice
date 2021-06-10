import { state } from '@angular/animations';
import { Component, Inject, Input, OnInit, Optional } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { State, stateList } from 'src/app/DummyData/DummyEmployeeData';
import { PeriodicElement } from 'src/app/Models/PeriodicElement';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})
export class EmployeeEditComponent implements OnInit {

  public employee:PeriodicElement;

@Input() employeeForm:FormGroup;

  stateList:any;


  constructor( public dialogRef: MatDialogRef<EmployeeEditComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: PeriodicElement) { }

  ngOnInit(): void {

    console.log('ye hai data',this.data);
    this.employee=this.data;
    this.employeeForm= new FormGroup({
      firstName:new FormControl(this.employee.firstName),
      lastName: new FormControl(this.employee.lastName),
      employeeID: new FormControl(this.employee.employeeID),
      dob: new FormControl(new Date(this.employee.dob.split("T")[0])),
      address: new FormControl(this.employee.address),
      state: new FormControl(this.employee.state),
      city:new FormControl(this.employee.city),
      departmentName: new FormControl(this.employee.departmentName),
      companyName:new FormControl(this.employee.companyName)


    });

    this.stateList=stateList;

  }

  get firstName(){
    return this.employeeForm.get('firstName').value;
  }
  get lastName(){
    return this.employeeForm.get('lastName').value;
  }
  get employeeID(){
    return this.employeeForm.get('employeeID').value;
  }
  get dob(){
    return this.employeeForm.get('dob').value;
  }
  get address(){
    return this.employeeForm.get('address').value;
  }
  get state(){
    return this.employeeForm.get('state').value;
  }
  get city(){
    return this.employeeForm.get('city').value;
  }
  get departmentName(){
    return this.employeeForm.get('departmentName').value;
  }
  get companyName(){
    return this.employeeForm.get('companyName').value;
  }

  closeDialog(input){
    if('done'==input){
      this.dialogRef.close({ event: 'close', data:
       {firstName:this.firstName,lastName:this.lastName,dob:this.dob,state:this.state,city:this.city,departmentName:this.departmentName,companyName:this.companyName,employeeID:this.employeeID,address:this.address}
       , classType:PeriodicElement });
    }else{
      this.dialogRef.close({ event: 'close',data: 'cancel',classType:String });
    }

  }

  getCities(stateChosen:any){
    //console.log(stateChosen);
   // console.log(this.stateList.filter((statObj:State)=> { console.log(statObj.value); return statObj.value==stateChosen}).cities);
   if(stateChosen && this.stateList.filter((statObj:State)=> { return statObj.value==stateChosen}) && this.stateList.filter((statObj:State)=> { return statObj.value==stateChosen})[0]){
   return this.stateList.filter((statObj:State)=> { return statObj.value==stateChosen})[0].cities;  }
  else {
    return [];
  }}

  onDateChange(event){
console.log(typeof event.target.value);
  }

}
