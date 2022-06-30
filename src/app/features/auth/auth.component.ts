import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../core/service/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    email: new FormControl(""),
    password: new FormControl("")
  })

  constructor(private authService : AuthService,
              private route: Router) { }

  ngOnInit(): void {

  }

  submit() {
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password).then(
      user => {
        sessionStorage.setItem('email', this.loginForm.value.email)
        this.route.navigateByUrl('/shop')
      }
    )
  }
}
