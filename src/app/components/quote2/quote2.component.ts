import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote2',
  templateUrl: './quote2.component.html',
  styleUrls: ['./quote2.component.css']
})
export class Quote2Component implements OnInit {

  golfPrice : number = 550000;
  golfQty: number = 1;
  toyPrice : number = 480000;
  toyQty: number = 1;
  audiPrice : number = 998000;
  audiQty: number = 1;
  total : number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  calculateTotal = () => {
    this.total = this.golfPrice * this.golfQty + this.toyPrice * this.toyQty + this.audiPrice * this.audiQty;
  }

}
