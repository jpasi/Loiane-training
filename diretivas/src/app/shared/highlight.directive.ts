import { Directive, HostListener, ElementRef, Renderer2, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  @HostListener('mouseenter') onMouseOver() {
      this.backgroundColor = this.highlightColor;
    }

    @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = this.defaultColor;
    }

    @HostBinding('style.backgroundColor') backgroundColor: any;

    @Input() defaultColor: string = 'white';
    @Input('highlight') highlightColor: string = 'yellow';

  constructor() { }

  ngOnInit(){
    this.backgroundColor = this.defaultColor;
  }

}
