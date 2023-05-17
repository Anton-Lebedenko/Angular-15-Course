import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appSelectByBorder]'
})
export class SelectByBorderDirective {
  @Input('appSelectByBorder') color!: string;
  @Input() defaultBorderColor: string = 'peachpuff';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  @HostListener('click')
  onClick(): void {
    this.toggle(this.color ?? 'red');
  }

  private toggle(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'borderColor', color);
  }
}
