import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderMenu } from 'src/app/interface/HeaderMenu';
import { EmplCountService } from 'src/app/services/empl-count.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  appName: string = '';
  apps: HeaderMenu[] = [
    {
      name: 'dashboard',
      title: 'Dashboard',
    },
    {
      name: 'home',
      title: 'Home',
    },
  ];
  totalEmpls: number = 0;

  constructor(private router: Router, private emplCount: EmplCountService) {
    this.emplCount.emplCount.subscribe(x => {
      this.totalEmpls = x;
    })
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        //Do something with the NavigationEnd event object.
        // console.log(event);
        this.appName = event.url.slice(1);
        console.log(this.appName);
      });
  }

  ngOnInit(): void {}
}
