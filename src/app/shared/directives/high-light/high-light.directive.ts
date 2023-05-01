import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {
  @HostBinding('class') highlightClass!: string;

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlightClass = 'highlight-mouseenter';
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlightClass = '';
  }

  constructor() {}
}
