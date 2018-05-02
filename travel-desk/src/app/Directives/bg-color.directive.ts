import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '.myBgColor'
})
export class BgColorDirective {
  constructor(private elRef: ElementRef) {

  }
  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor('darkgrey');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor('white');
  }
  private changeBackgroundColor(color: string) {
    this.elRef.nativeElement.style.backgroundColor = color;
  }
}