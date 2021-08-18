import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {

  constructor(private elem:ElementRef) { }

  @HostListener("click") onClicks(){
  this.textdeco("line-through")
  }
  
  @HostListener("dblclick") onDoubleClicks(){
  this.textdeco("None")
  }

  private textdeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }
}
