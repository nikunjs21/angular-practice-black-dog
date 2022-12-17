import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmplCountService } from 'src/app/services/empl-count.service';
// import { ApiService } from 'src/app/services/api.service';
import { EmployeeService } from 'src/app/services/employee.service';
// import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  sampleArray: any = ['AAA', 'BBB', 'CCC', 'DDD', 'EEE'];
  employees: any = { data: [], showLoader: false };
  checkedEmpls: any = [];

  constructor(private router: Router, private empl: EmployeeService, private emplCount: EmplCountService) {}

  ngOnInit(): void {
    this.getEmployeesData();
  }

  gotoHome() {
    this.router.navigate(['home']);
  }

  listenAction(event: any) {
    console.log(event);
  }

  onCheckboxChange(data:any){
    if(data.isCheck){
      this.checkedEmpls.push(data);
    }else{
      const isFound = this.checkedEmpls.findIndex(e => e.id === data.id);
      
      if(isFound !== -1){
        this.checkedEmpls.splice(isFound, 1);
      }
    }
    this.emplCount.count.next(this.checkedEmpls.length);
    console.log(data);
  }

  //TODO: Directive, PIPE, Behaviour Subject, Observable, ngXs/Rx(self)
  //TODO: useState, useEffect, forwardRef, useImperetiveHandler, useReducer, useSelecter, useDispatch,
  //TODO: ContextAPI, Redux, React-router-dom, props,
  //TODO: Optimize: useMemo, useCallback, React.memo()
  //TODO: interceptro http (self)

  async getEmployeesData() {
    this.employees.showLoader = true;
    try {
      const res: any = await this.empl.getEmployeesData();
      res.data.forEach((d) => {
        d.tt = 1602162242;
        d.isCheck = false;
      });
      this.employees.data = res.data;
      console.log(res);
    } catch (error) {
      console.log(error);
    }
    this.employees.showLoader = false;
  }
}
