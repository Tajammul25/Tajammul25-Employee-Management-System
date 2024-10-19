import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';
import { identifierName } from '@angular/compiler';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees : Employee[]=[];
  

  constructor (private service: EmployeesService, private router: Router){}

  ngOnInit(): void {
     this.getemployee();
}

private getemployee(){
  this.service.getEmployeeList().subscribe(data =>{
    this.employees = data;
  })
}

// updateEmployee
updateEmployee(id:number){
  this.router.navigate(["updateEmployee", id]);
}

// delete Employee
deleteEmployee(id : number){
  this.service.deleteEmployee(id).subscribe(data =>{
    console.log(data);
     this.getemployee();
  })
}

detailsEmployee(id : number){
  this.router.navigate(["/detailsEmployee", id]);
}



}