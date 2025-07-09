import { Directive, ElementRef, Input, OnInit, Renderer2 } from "@angular/core";
import { Router } from "@angular/router";

@Directive({
  selector: "[appMyRouterLink]",
})
export class MyRouterLinkDirective implements OnInit {
  @Input() appMyRouterLink: string = "";
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log(this.appMyRouterLink);

    this.renderer.listen(
      this.el.nativeElement,
      "click",
      this.clickHandler.bind(this)
    );
  }

  clickHandler(e: MouseEvent) {
    console.log(e);

    this.router.navigate([this.appMyRouterLink]);
  }
}
