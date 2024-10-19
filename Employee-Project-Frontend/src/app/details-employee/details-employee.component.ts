import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { ActivatedRoute } from '@angular/router';
import { NumberSymbol } from '@angular/common';
import { Employee } from '../employee';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.css']
})
export class DetailsEmployeeComponent implements OnInit {

  constructor(private service: EmployeesService, private activatedRoute: ActivatedRoute) { }

  id: number=0;

  Employee: Employee = new Employee();

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params["id"];

    this.service.getEmployeeById(this.id).subscribe(data => {
      this.Employee = data;
    })
  }
}