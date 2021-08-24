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
  addTask(){


    let ID = document.getElementById("ID");
    let name = document.getElementById("name")
    let task = document.getElementById("task");
    let Due = document.getElementById("DL");
    this.list.push({id:ID, nm:name, t:task, due:Due})
    console.warn(this.list)
  }
}
