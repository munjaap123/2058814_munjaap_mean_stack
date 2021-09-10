import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient} from '@angular/common/http';
//import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  //let answer
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
    
  }
  allQuestion =[
    { question: "What does JSON stand for?",
    ans1 : "JavaStyleObjectNotation",
    ans2 : "JavaScriptOperationNotation",
    ans3 : "JavaSourceOpenNotation",
    ans4 : "JavaScriptObjectNotation",
    correctAns: "JavaScriptObjectNotation"
},
{
    "question" : "Where is console.log displayed?",
    ans1: "On the HTML page",
    ans2: "Index Page",
    ans3: "On the specifications tab",
    ans4: "In the console tab",
    correctAns: "In the console tab"
},
{
question: "which place contains a local directory of files?",
ans1: "GitHub",
ans2 :"File Explorer",
ans3: "Command Prompt",
ans4: "Task Manager",
correctAns: "File Explorer"
},
{ question: "Which of the following places is in Kentucky?",
    ans1: "Plainsboro",
    ans2: "Concord",
    ans3: "Charlotte",
    ans4: "All of above",
    correctAns: "Concord"
}
  //{question:"5+5",ans1:"10",ans2:"11",ans3:"12",ans4:"13",correctAns:"10"},
   // {question:"5-5",ans1:"0",ans2:"1",ans3:"2",ans4:"3",correctAns:"0"}
]
checkAnswers():any{
  //return this.http.get<allQuestion[]>("/assets/test-questions.json");
}
}
