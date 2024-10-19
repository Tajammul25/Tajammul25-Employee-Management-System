import { Component, numberAttribute } from '@angular/core';
import { Employee } from '../employee';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent {

  // employees : Employee[]=[];

  employee : Employee = new Employee();

  
  constructor(private service : EmployeesService, private activateRouter : ActivatedRoute, private router : Router){}
  onSubmit(){
    console.log(this.employee);
    this.service.updateEmployee(this.id, this.employee).subscribe(data =>{
    this.goTOEmployeeList();
    }, error => console.log(error));
 }
 id:number=0;
 ngOnInit():void{
  this.id = this.activateRouter.snapshot.params['id'];
  this.service.getEmployeeById(this.id).subscribe(data =>{
    this.employee =  data;

   }, error=> console.log(error) );
 }

goTOEmployeeList(){
  this.router.navigate(["/employeeList"]);
}
 

 

}
