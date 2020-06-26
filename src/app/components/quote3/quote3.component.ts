import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote3',
  templateUrl: './quote3.component.html',
  styleUrls: ['./quote3.component.css']
})
export class Quote3Component implements OnInit {

  bookPrice : number = 10;
  bookQty: number = 110;
  penPrice : number = 3;
  penQty: number = 1800;
  eraserPrice : number = 5;
  eraserQty: number = 550;
  total : number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  calculateTotal = () => {
    this.total = this.bookPrice * this.bookQty + this.penPrice * this.penQty + this.eraserPrice * this.eraserQty;
  }


}
