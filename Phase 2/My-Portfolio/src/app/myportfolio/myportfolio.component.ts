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
  
   
  //obj1: any = this.loginRef.value;
 // user: any = loginRef.valid;
  //pass: any = "";
  
  //profile: any;
  signup = new FormGroup({
    fname:new FormControl(),
    lname:new FormControl(),
    usrset:new FormControl(),
    pwdset:new FormControl()
  })
  loginRef = new FormGroup({
    username: new FormControl(),
    password: new FormControl(),
  });
  contactform = new FormGroup({
    contact: new FormControl(),
    phone: new FormControl(),
  });
  contacts:Array<contacts>=new Array();
  users:Array<profile>=new Array();
  msg:string="";
  loginFlag: boolean = true;
  portfolioFlag: boolean = false;
  RegisterFlag: boolean = false;


  constructor() { }

  ngOnInit(): void {
  }


  
  checkUser(){
    
    let login = this.loginRef.value;
    let register = this.signup.value;
    //let user = login.user;
    //console.log(login);
     for(var i = 0; i<this.users.length; i++){
    if(this.users[i].usern==register.usrset && login.pass==register.pwdset){
      this.loginFlag = false;
      this.portfolioFlag = true;
      this.RegisterFlag = false;
        this.msg = "Successfully Login!"
    }else {
        this.msg = "Failure try once again!";
        this.loginFlag = true;
        this.portfolioFlag = false;
        this.RegisterFlag = false;
    }
    this.loginRef.reset();
  }
  }

  register(){
    // let register = this.regRef.value;
    this.loginFlag = false;
    this.portfolioFlag = false;
    this.RegisterFlag = true;
    let x: profile = new profile(this.signup.value.fname, this.signup.value.lname,this.signup.value.usrset,this.signup.value.pwdset);
    this.users.push(x);
    this.signup.reset()
  }

  login(){
    this.loginFlag = true;
    this.portfolioFlag = false;
    this.RegisterFlag = false;
    this.loginRef.reset()
  }


  SaveData() {
    let person = new contacts(this.contactform.value.Name, this.contactform.value.Phone);
    this.contacts.push(person);
   }

}
