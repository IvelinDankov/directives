import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

type MyVoid = () => void;

@Directive({
  selector: "[appNewApp]",
  standalone: true,
})
export class NewAppDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener("mouseenter") onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, "backgroundColor", "yellow");
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, "backgroundColor");
  }
}
