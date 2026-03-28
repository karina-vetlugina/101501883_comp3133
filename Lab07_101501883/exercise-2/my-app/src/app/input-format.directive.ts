import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[input-format]',
})
export class InputFormatDirective {
  constructor(private el: ElementRef<HTMLInputElement>) {}

  @HostListener('blur')
  onBlur(): void {
    const input = this.el.nativeElement;
    const upper = input.value.toUpperCase();
    input.value = upper;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  }
}
