import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() 
  : string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.elemRef.nativeElement.style.backgroundColor = 'green';
  }

  @HostListener('mouseenter') mouseover(event: Event) {
    // this.renderer.setStyle(this.elemRef.nativeElement , 'backgroundColor', 'green');
    this.backgroundColor = this.HighlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    // this.renderer.setStyle(this.elemRef.nativeElement , 'backgroundColor', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
