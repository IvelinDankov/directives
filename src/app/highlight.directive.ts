import {
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  Renderer2,
} from "@angular/core";

@Directive({
  selector: "[appHighlight]",
})
export class HighlightDirective {
  @HostListener("mouseover", ["$event"]) mouseOverHandler(e: MouseEvent) {
    console.log("mouseOver");
  }
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}
}
