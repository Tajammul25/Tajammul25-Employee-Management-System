import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private baseUrl="http://localhost:8080/api";
  constructor(private httpclient : HttpClient) { }

  getEmployeeList(): Observable<Employee[]>{
       return this.httpclient.get<Employee[]>(`${this.baseUrl}/getallemployee`);
  }

  createEmployee(employee : Employee): Observable<object>{
    return this.httpclient.post(`${this.baseUrl}/addEmployee`, employee);
  }

  getEmployeeById(id : number): Observable<Employee>{
   return this.httpclient.get<Employee>(`${this.baseUrl}/getEmployeeById/${id}`);
  }

  updateEmployee(id : number, Employee: Employee): Observable<object>{
    return this.httpclient.put(`${this.baseUrl}/updateEmployee/${id}`, Employee);
  }

  deleteEmployee(id: number): Observable<object>{
   return this.httpclient.delete(`${this.baseUrl}/deleteEmployee/${id}`);
  }
}
