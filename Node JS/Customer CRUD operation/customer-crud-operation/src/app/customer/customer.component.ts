import { CustomerService } from './../customer.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Customer } from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {


  customerRef = new FormGroup({
    cid: new FormControl(),
    cname: new FormControl(),
    age: new FormControl()
  })

  storeMsg?:string;
  deleteMsg?:string;
  flag:boolean=false;
  customers:Array<Customer> = [];
  
  cid: any;
  age: any;
  constructor(public custSer: CustomerService) { }

  ngOnInit(): void {
    this.getAllCustomers()
  }
 storeInfo(){
   let customer = this.customerRef.value;
   this.custSer.storeCustomerInfo(customer).subscribe(result=>{
     console.log(result);
     this.getAllCustomers();
   }, error=>console.log(error));

   this.customerRef.reset();
 }

getAllCustomers(){
  this.custSer.retrieveAllCustomerInfo().subscribe(result=> {
    this.customers = result;
  })
}
deleteRec(cid:any){
  this.custSer.deleteCustomerInfo(cid).subscribe(result =>{
         this.deleteMsg=result.msg;
         this.getAllCustomers();
  }, error=>console.log(error));
  }

  updateAge(cid:any,age:any){
    this.updateMsg="";
    this.flag= true;
    this.cid = cid;
    this.age=age;

  }
  
updateMsg?:string;
nowUpdateAge(){
   this.custSer.updateCustomerAge(this.cid,this.age).subscribe(result=> {
     this.updateMsg=result.msg;
     this.flag=false;
     this.getAllCustomers();
   
}, error=>console.log(error));
}
}