import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  value: string;
  constructor() {
    this.value = '';
  }
  changeValue (event) {
    console.log('changeValue', event);
  }

  saveValue (event) {
    this.value = event;
    console.log('saveValue', event);
  }
}
