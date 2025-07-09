import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component.js";
import { RegisterComponent } from "./register/register.component.js";
import { HomeComponent } from "./home/home.component.js";

export const routes: Routes = [
  {
    path: '',
    pathMatch: "full",
    redirectTo: '/home'
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "**",
    component: HomeComponent,
  },
];
