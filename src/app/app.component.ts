import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn';
  counterVal: string;
  counter = 0;

  logCounter(count: string) {
    this.counterVal = count;
  }

  updateCounter() {
    this.counter = this.counter + 1 ;
  }
}
