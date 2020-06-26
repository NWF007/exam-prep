import { Component, OnInit } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-quote1',
  templateUrl: './quote1.component.html',
  styleUrls: ['./quote1.component.css']
})
export class Quote1Component implements OnInit {

  galaxyPrice : number = 15000;
  galaxyQty: number = 3;
  iphonePrice : number = 18000;
  iphoneQty: number = 5;
  huaweiPrice : number = 12000;
  huaweiQty: number = 1;
  total : number = 0;
  qoute1Total: number = this.total;
  static quote1Total: number;

  constructor() { }

  ngOnInit(): void {
  }


  calculateTotal = () => {
    this.total = this.galaxyPrice * this.galaxyQty + this.iphonePrice * this.iphoneQty + this.huaweiPrice * this.huaweiQty;
  }
}

export default Quote1Component;