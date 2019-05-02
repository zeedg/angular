import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  error = false;
  success = false;
  constructor(
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onSignup(form: NgForm) {
    let signup = {
      fname: form.value.fname,
      lname: form.value.lname,
      email: form.value.email,
      password: form.value.password,
      cpassword: form.value.cpassword
    }

    this.authService.signup(signup)
      .subscribe((data: any) => {
        console.log(data);
      });

  }
}
