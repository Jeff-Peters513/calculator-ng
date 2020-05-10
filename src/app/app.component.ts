import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';

}

let results:number =0;

const add = (box1:number, box2:number) => {
   results = box1 + box2;
   display(results);
}

const subt = (box1:number, box2:number) => {
  results = box1 - box2;
  display(results);
}

const mult =(box1:number, box2:number) => {
  results = box1 * box2;
  display(results);
}

const divi = (box1:number, box2:number) => {
  results = box1 / box2;
  display(results);
}

const display = (results:number) => {
  let nbrCtrl = document.getElementById("results");
  nbrCtrl.value = results;

}