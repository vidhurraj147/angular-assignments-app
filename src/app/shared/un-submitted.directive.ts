import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnSubmitted]'
})
export class UnSubmittedDirective {

  constructor(elem: ElementRef) { 
    elem.nativeElement.style.color = 'red';
  }

}
