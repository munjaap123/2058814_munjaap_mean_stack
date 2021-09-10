import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { MyQuestions } from './MyQuestions.model';
@Injectable({
  providedIn: 'root'
})
export class OnlinetestService {

  constructor(public http:HttpClient) { 
  
  }
  checkAnswers(): Observable<MyQuestions[]>("/assets/test-questions.json");
   


}
