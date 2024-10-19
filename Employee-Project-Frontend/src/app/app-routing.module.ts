import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';

const routes: Routes = [

{path : "employeeList", component : EmployeeListComponent},
{path: "addEmployee" , component : AddEmployeeComponent},
{path : "updateEmployee/:id" , component: UpdateEmployeeComponent},
{path : "detailsEmployee/:id", component : DetailsEmployeeComponent},
{path: "" , redirectTo: "employeeList" , pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
