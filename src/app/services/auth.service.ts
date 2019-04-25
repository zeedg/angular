import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class AuthService {

  isLoggedIn: boolean = false;

  constructor(private http:HttpClient) {}

  onSignupUser(signup: Signup) {
  }

  onSigninUser(obj:any){
    
    if(obj.email === 'example@gmail.com' && obj.password === '123'){
      this.isLoggedIn = true;
      return true;
    }else{
      this.isLoggedIn = false;
      return false;
    }
    // this.http.post(
    //   "https://medicalshipmentbeta.com/main/checklogin",
    //   user_credentials
    // )
    // .pipe(
    // );
  }

  checkAuth(){
      return (this.isLoggedIn === true) ? true : false;
  }
  


}// end of class

