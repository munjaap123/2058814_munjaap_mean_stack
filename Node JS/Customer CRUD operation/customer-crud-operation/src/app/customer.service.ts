import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(public http: HttpClient) { }
  storeCustomerInfo(customer:Customer):Observable<any>{
    return this.http.post<any>("http://localhost:9090/storeCustomerInfo", customer);
    
  }
  retrieveAllCustomerInfo():Observable<Customer[]>{
    return this.http.get<Customer[]>("http://localhost:9090/storeCustomerInfo");
  }
  deleteCustomerInfo(cid:any):Observable<any>{
    return this.http.delete<any>("http://localhost:9090/deleteCustomerInfo/"+cid)
  }

  updateCustomerAge(cid:any,age:any):Observable<any>{
    return this.http.put("http://localhost:9090/updateCustomerAge/",{cid:cid,age:age})
  }
}
