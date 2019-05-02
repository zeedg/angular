import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable, throwError } from 'rxjs';
// import { catchError, map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  apiUrl = 'https://www.medicalshipmentbeta.com/manager/api';
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) {

  }

  getHomeData() {
    return this.http.get(`${this.apiUrl}`);
  }

  getProductListing(catId){
    return this.http.get(`${this.apiUrl}/category/${catId}`);
  }

  getProductDetails(productId){
    return this.http.get(`${this.apiUrl}/product-detail/${productId}`);
  }

  

  // saveAddToCart(addToCartData: AddToCart){
  //   addToCartData['user_id'] = this.cookieService.get('user_id');
  //   addToCartData['user_fname'] = this.cookieService.get('user_fname');
  //   addToCartData['user_email'] = this.cookieService.get('user_email');
  //   console.log(addToCartData);
  //   return this.http.post(`${this.apiUrl}/addto_cart`, addToCartData)
  //     .pipe( map(res => res), catchError(err => throwError(err)) );
  // }

  // getCartItems(cartProductData: CartProductDetails[]){
  //   console.log(cartProductData)
  //   return this.http.post(`${this.apiUrl}/cart/ajax_cart`, cartProductData);
  // }
}
