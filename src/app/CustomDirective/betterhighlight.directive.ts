import { Directive, ElementRef, HostBinding, HostListener,Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterhighlight]'
})
export class BetterhighlightDirective {

  constructor(element : ElementRef,private renderer:Renderer2) { }

  @Input() defaultColor:string ='yellow';
  @Input() highlightColor:string = 'pink';

@HostBinding('style.backgroundColor')  background:string = this.defaultColor; 
@HostBinding('style.border')  border:string = 'none'; 


@HostListener('mouseenter') mouseenter(){
  this.background= this.highlightColor;
  this.border='red 2px solid'
}
@HostListener('mouseleave') mouseleave(){
  this.background= this.defaultColor;
  this.border='none'
}


}
