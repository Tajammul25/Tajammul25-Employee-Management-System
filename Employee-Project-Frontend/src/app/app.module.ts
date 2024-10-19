import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { FormsModule } from '@angular/forms';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    UpdateEmployeeComponent,
    DetailsEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
