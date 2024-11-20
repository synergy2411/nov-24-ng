import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() favColor: string = '#666';

  @HostBinding('style.background-color')
  bgColor: any;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
  }

  // constructor(private elRef: ElementRef) {
  //   this.elRef.nativeElement.style.backgroundColor = 'blue';
  // }
}
