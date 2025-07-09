import { JsonPipe } from "@angular/common";
import { Component, ViewChild } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-login",
  imports: [
    RouterLink,
    FormsModule, // template driven approach
    JsonPipe,
  ],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.css",
})
export class LoginComponent {
  @ViewChild("loginForm") form: NgForm | undefined;
  formSumbitHandler() {
    if (!this.form) {
      return;
    }

    const form = this.form;
    if (form?.invalid) {
      console.log("ivalid", form.invalid);
    }

    const { email, password } = form.value;
    console.log(email);
    console.log(password);
  }
}
