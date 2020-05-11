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

  add() {
    this.results = this.box1 + this.box2;
  }

  subt() {
    this.results = this.box1 - this.box2;
  }
  mult() {
    this.results = this.box1 * this.box2;
  }
  divi() {
    this.results = this.box1 / this.box2;
  }
}

