import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appDirective]'
})
export class DirectiveDirective {

  constructor(private el:ElementRef) { }
@HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.backgroundColor='yellow';
  }
 
  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.backgroundColor="";
  }
}
