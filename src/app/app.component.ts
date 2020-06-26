import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exam-prep';

  q1 = false;
  q2 = false;
  q3 = false;
  q4 = false;


  toggleQ1 = () => {
    this.q1 = !this.q1;
  }

  toggleQ2 = () => {
    this.q2 = !this.q2;
  }
  
  toggleQ3 = () => {
    this.q3 = !this.q3;
  }

  toggleQ4 = () => {
    this.q4 = !this.q4;
  }
}
