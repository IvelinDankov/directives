import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [
    RouterLink,
    FormsModule, // template driven approach
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  formSumbitHandler(form: NgForm) {
    console.log(form.value);
  }
}
