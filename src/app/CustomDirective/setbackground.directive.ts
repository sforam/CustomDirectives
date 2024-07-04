import { Directive, ElementRef, OnInit } from "@angular/core";


@Directive({
    selector:'[SetBackground]'
})
export class SetBackgroundDirective implements OnInit{
    private element: ElementRef;
    constructor(element: ElementRef){
       // element.nativeElement.style.backgroundColor = '#C8E6C9'
    
        this.element = element;
    }

    ngOnInit(){
       this.element.nativeElement.style.backgroundColor = '#C8E6C9' 
    }
}