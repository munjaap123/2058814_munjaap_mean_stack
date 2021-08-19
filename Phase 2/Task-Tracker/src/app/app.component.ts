import { identifierModuleUrl } from '@angular/compiler';
import { Component } from '@angular/core';
import { __importDefault } from 'tslib';
import { Todo } from './Todo.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Task-Tracker';
  list: Array<Todo> = [];
  

  //addTask(taskRef: NgForm){
    
 // }
  addTask(idRef:any, nameRef:string, taskRef: string, dueRef:Date){
    this.list.push({id:idRef, name:nameRef, task:taskRef, due:dueRef})
    console.warn(this.list)
  }
}
