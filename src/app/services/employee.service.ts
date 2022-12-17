import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private api: ApiService) { }

  getEmployeesData(){
    return this.api.doGet('employees');
  }
}
