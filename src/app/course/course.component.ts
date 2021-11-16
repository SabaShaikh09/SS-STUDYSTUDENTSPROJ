import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  course= [

    {'id':1,'name':'Learn Java','description':'Java is a programming language and a platform .Java is a high level robust ,object-oriented and secure programming language.','image':'../../assets/java.jpg'},
    {'id':2,'name':'Learn Python','description':'Python is a high-level, interpreted, interactive and object-oriented scripting language. Python is designed to be highly readable. ','image':'../../assets/python.png'},
    {'id':3,'name':'Learn C ','description':'C is a powerful general-purpose programming language. It can be used to develop software like operating systems, databases and so on.','image':'../../assets/c.png'},
    {'id':4,'name':'Learn C++','description':'C++ is a powerful general-purpose programming language. It can be used to develop operating systems, browsers, games, and so on. ','image':'../../assets/cplus.png'},
    {'id':5,'name':'Learn Angular','description':'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.','image':'../../assets/angular.png'},
    {'id':6,'name':'Learn Typescript','description':'TypeScript is a programming language developed and maintained by Microsoft. It is a strict syntactical superset of JavaScript and adds optional static typing.','image':'../../assets/typescript.png'},
    {'id':7,'name':'Learn Nodejs','description':'Node. js (Node) is an open source development platform for executing JavaScript code server-side. ','image':'../../assets/nodejs.jpg'},
    {'id':8,'name':'Learn Reactjs','description':'React is a free and open-source front-end JavaScript library for building user interfaces or UI components. It is maintained by Facebook ','image':'../../assets/reactjs.png'},
    {'id':9,'name':'Learn Javascript','description':'JavaScript is a lightweight, interpreted programming language. It is designed for creating network-centric applications. It is complimentary to and integrated with Java.','image':'../../assets/javascript.jpg'},
    {'id':10,'name':'Learn BootStrap','description':'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and (optionally) JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.','image':'../../assets/bootstrap.png'},
    {'id':11,'name':'Learn HTML','description':'The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.','image':'../../assets/html.jpg'},
    {'id':12,'name':'Learn CSS','description':'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language such as HTML.','image':'../../assets/css.jpg'},
    



  ]
  
}

