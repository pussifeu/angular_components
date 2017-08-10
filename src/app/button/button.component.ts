import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {
  value: any;
  @Output() onChangeBtnValue: EventEmitter<string>;
  @Output() onSaveBtnValue: EventEmitter<string>;
  constructor() {
    this.value = '';
    this.onChangeBtnValue = new EventEmitter<string>();
    this.onSaveBtnValue = new EventEmitter<string>();
  }

  ngOnInit() {
  }

  selectNumber (value: number) {
    if (typeof (value) === 'number') {
      if (this.value.length < 4) {
        this.value = this.value.toString() + value.toString();
        this.onChangeBtnValue.emit(this.value);
      }
    }
  }

  selectAction (action: string) {
    if (action === 'cancel') {
      this.value = this.value.slice(0, this.value.length - 1);
      this.onChangeBtnValue.emit(this.value);
    }
    if (action === 'validate') {
      this.onSaveBtnValue.emit(this.value);
    }
  }

}
