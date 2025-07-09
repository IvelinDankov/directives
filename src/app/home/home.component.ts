import { Component } from "@angular/core";
import { NewAppDirective } from "../new-app.directive.js";
import { RouterLink } from "@angular/router";
// import { NewAppDirective } from "../new-app.directive.js";

@Component({
  selector: "app-home",
  imports: [NewAppDirective, RouterLink],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.css",
})
export class HomeComponent {}
