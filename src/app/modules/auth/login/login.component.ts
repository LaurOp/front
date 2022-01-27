import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup} from "@angular/forms";
import {DataService} from "../../../services/data.service";
import {LoginService} from "../../../services/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private dataService: DataService,
    private loginService: LoginService,
  ) { }

  public loginForm: FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  ngOnInit(): void {
  }

  get username(): AbstractControl{
    return <AbstractControl>this.loginForm.get('username');
  }

  get password(): AbstractControl{
    return <AbstractControl>this.loginForm.get('password');
  }

  public login(): void{
    // this.loginService.login(this.loginForm.value.email, this.loginForm.value.password).subscribe(
    //   (res) => {
    //     console.log(JSON.stringify(res));
    //   },
    //   (erro) => {
    //     console.error(erro);
    //   }
    // );
    this.dataService.changeUserData(this.loginForm.value);
    localStorage.setItem('Role', 'Admin');
    this.router.navigate(['/games']);
  }



}
