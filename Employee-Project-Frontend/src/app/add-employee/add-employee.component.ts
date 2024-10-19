import { Component } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {

  employee : Employee = new Employee();

  ngOnInit():void{
   
  }

  constructor(private employeeService : EmployeesService, private router : Router){}

  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data =>{
      console.log(data);
      this.goTOEmployeeList();
      
    },
    error => console.log(error));
  }

  goTOEmployeeList(){
    this.router.navigate(["/employeeList"]);
  }

  onSubmit(){
     console.log(this.employee);
     this.saveEmployee();
     
  }
}
