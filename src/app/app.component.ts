import { Component } from '@angular/core';
import { getNumberOfCurrencyDigits } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Calculator';
  box1: number;
  box2: number;
  results:number;

  constructor( ){ };

  }

let box1 = document.querySelector("#box1");
console.log(box1);
let box2 = Number(document.getElementById("box2"));
console.log(box2);
let results:number =0;

function add(box1, box2): number {
  let results:number = box1 + box2;
  console.log(results);
  return results;
   // display(results);
}


// const subt = (box1:number, box2:number) => {
//   results = box1 - box2;
//   display(results);
// }

// const mult =(box1:number, box2:number) => {
//   results = box1 * box2;
//   display(results);
// }

// const divi = (box1:number, box2:number) => {
//   results = box1 / box2;
//   display(results);
// }

const display = (results: number) => {
  let rts = document.querySelector("#results");
  rts.innerHTML = "results";

  //document.getElementById("results").value = results;

}

// const loaded = () =>{
//   display(results);
// }