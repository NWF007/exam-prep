import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote4',
  templateUrl: './quote4.component.html',
  styleUrls: ['./quote4.component.css']
})
export class Quote4Component implements OnInit {

  
  sprayPrice : number = 22;
  sprayQty: number = 35;
  rollOnPrice : number = 19;
  rollOnQty: number = 50;
  lotionPrice : number = 30;
  lotionQty: number = 10;
  total : number = 0;

  constructor() { }

  ngOnInit(): void {
  }


  calculateTotal = () => {
    this.total = this.sprayPrice * this.sprayQty + this.rollOnPrice * this.rollOnQty + this.lotionPrice * this.lotionQty;
  }


}
