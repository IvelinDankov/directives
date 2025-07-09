import {
  Directive,
  Input,
  OnChanges,
  OnInit,
  SimpleChange,
  TemplateRef,
  ViewContainerRef,
} from "@angular/core";

@Directive({
  selector: "[appStructuralDirective]",
  exportAs: "appStructuralDirective",
})
export class StructuralDirectiveDirective implements OnChanges {
  @Input() appStructuralDirective: boolean = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) {
    console.log(templateRef);
  }

  ngOnChanges(): void {
    console.log("onChanges", this.appStructuralDirective);

    if (this.appStructuralDirective) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
}
