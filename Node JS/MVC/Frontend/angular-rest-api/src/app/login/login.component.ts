import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef = new FormGroup({
    email:new FormControl(),
    password: new FormControl()
  })


  constructor(public loginSer: LoginService, 
  public router: Router) { }
  msg?:string;
  ngOnInit(): void {  }

  checkUser() {
    let login = this.loginRef.reset();
    //console.log(login);
    this.loginSer.checkLoginDetails(login).
    subscribe(result=>console.log(result),
    error=>console.log(error));
    this.loginRef.reset();
  }

}
