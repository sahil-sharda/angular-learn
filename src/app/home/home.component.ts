import { Component, OnInit, HostListener, ElementRef, Renderer2, Output, Input, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  @Output() valueChange = new EventEmitter();
  @Input() changedVal: string;
  @ViewChild('inputValue', {static: false}) inputValue: ElementRef;

  inputVal: string = 'hello';
  private counter = 0;
  private elemRef: ElementRef;
  private inputValueForView: string;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  changeVal(event: Event) {
    this.inputVal = (<HTMLInputElement>event.target).value;
  }


  valueChanged() {
      // this.counter = this.counter + 1;
      // this.valueChange.emit(this.counter.toString());
      this.inputValueForView = this.inputValue.nativeElement.value;
  }

}
