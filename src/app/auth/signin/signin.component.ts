import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginErr = false;
  statusMessage = '';
  constructor(
    private authService: AuthService,
    private router: Router,
    private cookieService: CookieService) { }

  ngOnInit() {
  }

  onSignin(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    let userCredentials = {
      email: email,
      password: password
    }

    this.authService.signin(userCredentials)
      .subscribe((data: any) => {
        // console.log(data);
         if(data.status == 0){
           this.loginErr = true;
           this.statusMessage = 'Username or password invalid';
           this.router.navigate(['/signin']);
         }else if(data.status == 1){
           this.cookieService.set('user_email',data.front_email); 
           this.cookieService.set('user_id',data.front_id);
           this.cookieService.set('user_fname',data.front_name);
           this.cookieService.set('company',data.company);
           this.cookieService.set('reference',data.reference);
           this.loginErr = false;
           this.statusMessage = '';
           this.router.navigate(['/home']);
         }
         
      });
  }

}
