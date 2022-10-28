import {
  AfterViewInit,
  Component,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FormGroup,
  FormControl,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent
  implements OnInit, OnChanges, AfterViewInit, OnDestroy
{
  username: string = '';
  password: string = '';
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private cookie: CookieService
  ) {}

  ngOnInit(): void {
    console.log('ngOnInit');
    this.loginForm = this.fb.group({
      username: ['demo', [Validators.required]],
      password: ['124', [Validators.required, Validators.minLength(6)]],
    });
  }

  onClickOfRegisterBtn() {
    console.log('Redirect');
    this.router.navigate(['/register']);
  }

  onLoginHandler() {
    console.log(this.loginForm.value);
    console.log(this.loginForm.valid);
    this.cookie.set("user", this.loginForm.value.username);
    this.router.navigate(["dashboard"]);
  }

  fetchUsernameHandler() {
    this.loginForm.patchValue({
      username: 'Nikunj',
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes, 'onChanges');
  }

  ngAfterViewInit(): void {
    console.log('After View Init');
  }

  ngOnDestroy(): void {
    console.log('on Destroy');
  }
}
