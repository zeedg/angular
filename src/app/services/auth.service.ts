import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  isLoggedIn: boolean = false;

  apiUrl = 'https://www.medicalshipmentbeta.com/manager/api';
  constructor(
    private http: HttpClient,
    private cookieService: CookieService,
    private router: Router) {

  }

  signin(userCredentials: { email: string, password: string }) {
    return this.http.post(`${this.apiUrl}/main/frontlogin`, userCredentials);
  }

  signup(signupInfo: Signup){
    return this.http.post(`${this.apiUrl}/register/index`, signupInfo);
  }

  checkAuth(){
      let isSetEmail = this.cookieService.check('user_email');
      let isSetUserId = this.cookieService.check('user_id');
      let isSetUserFname = this.cookieService.check('user_fname');
      if(isSetEmail && isSetUserId && isSetUserFname){
        return true;
      }else{
        return false;
      }
  }

  signOut(){
    this.cookieService.deleteAll('/');
    localStorage.clear();
    this.router.navigate(['/signin']);
  }
  


}// end of class

