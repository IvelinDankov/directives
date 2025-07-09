import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { StructuralDirectiveDirective } from "./structural-directive.directive.js";

@Component({
  selector: "app-root",

  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
  imports: [RouterOutlet, CommonModule, StructuralDirectiveDirective],
})
export class AppComponent {
  title = "directives";
  isShown: boolean = true;
  toggle() {
    this.isShown = !this.isShown;
  }
}
