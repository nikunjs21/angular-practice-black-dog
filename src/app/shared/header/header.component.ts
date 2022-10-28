import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderMenu } from 'src/app/interface/HeaderMenu';

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

  constructor(private router: Router) {
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
