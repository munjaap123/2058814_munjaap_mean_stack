import { Component, OnInit } from '@angular/core';
import { FormControl, FormControlName, FormGroup, Validators } from '@angular/forms';
import { contacts } from '../contacts.model';
import { profile } from '../profile.model';

@Component({
  selector: 'app-myportfolio',
  templateUrl: './myportfolio.component.html',
  styleUrls: ['./myportfolio.component.css']
})
//var username = user
export class MyportfolioComponent implements OnInit {
  [loginRef: string]: any;
   
  //obj1: any = this.loginRef.value;
  
  msg:string="";
  loginFlag: boolean = true;
  
  portfolioFlag: boolean = false;
  RegisterFlag: boolean = false;
 // user: any = loginRef.valid;
  //pass: any = "";
  contacts:Array<contacts>=new Array();
  users:Array<profile>=new Array();
  profile: any;
  signupForm = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    user:new FormControl("",[Validators.required]),
    pass:new FormControl("",[Validators.required])
  })
  loginRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
   

  constructor() { }

  ngOnInit(): void {
  }


  toggle(): any{
    this.loginFlag = false;
    this.portfolioFlag = true;
    this.RegisterFlag = false;
    
  }
  checkUser(loginForm:FormGroup){
    let login = this.loginRef.value;
    let register = this.regRef.value;
    //let user = login.user;
    //console.log(login);
    
    if(login.user==register.usrset && login.pass==register.pwdset){
        this.msg = "Successfully Login!"
    }else {
        this.msg = "Failure try once again!";
    }
    loginForm.reset();
  }
  register(): any{
     let register = this.regRef.value;
     
     
    
   }

  SaveData(): any{
    let cname;
    let phone;
     
   }

}
