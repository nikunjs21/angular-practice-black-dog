import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
// import { EmployeeService } from 'src/app/services/employee.service';
// import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sampleArray: any = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];
  employees: any = { data: [], showLoader: false };

  constructor(private router: Router) // private api: ApiService
  {}

  ngOnInit(): void {
    this.getEmployeesData();
  }

  gotoHome() {
    this.router.navigate(['home']);
  }

  listenAction(event: any) {
    console.log(event);
  }

  //TODO: Directive, PIPE, Behaviour Subject, Observable, ngXs/Rx(self)
  //TODO: useState, useEffect, forwardRef, useImperetiveHandler, useReducer, useSelecter, useDispatch,
  //TODO: ContextAPI, Redux, React-router-dom, props, 
  //TODO: Optimize: useMemo, useCallback, React.memo()

  async getEmployeesData() {
    this.employees.showLoader = true;
    try {
      // const res = await this.empl.getListOfEmployees();
      // const res = await this.empl.getListOfEmployees();
      // const res = await this.http.doGet();
      // console.log(res);
    } catch (error) {
      console.log(error);
    }
    this.employees.showLoader = false;
  }
}
