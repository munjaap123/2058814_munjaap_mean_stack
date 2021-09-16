import { Injectable } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {Login} from './login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(public Loginser: LoginService) {
      
   }
}
