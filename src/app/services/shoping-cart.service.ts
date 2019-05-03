import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ShopingCartService {
  // cartProductsInfoArrChanged = new Subject<any>();
  // private cartProductsInfoArr = [];
  // constructor() { }
  // getCartProductDetails(){
  //   return this.cartProductsInfoArr.slice();
  // }

  // addCartProductDetails(cartProductDetails: any){
  //   this.cartProductsInfoArr.push(cartProductDetails);
  //   this.cartProductsInfoArrChanged.next(this.cartProductsInfoArr.slice());
  // }
    apiUrl = 'https://www.medicalshipmentbeta.com/manager/api';
  constructor(
    private http: HttpClient,
    private cookieService: CookieService) {

  }

  saveAddToCart(addToCartData: AddToCart) {
    addToCartData['user_id'] = this.cookieService.get('user_id');
    addToCartData['user_fname'] = this.cookieService.get('user_fname');
    addToCartData['user_email'] = this.cookieService.get('user_email');
    console.log(addToCartData);
    return this.http.post(`${this.apiUrl}/addto_cart`, addToCartData)
      .pipe(map(res => res), catchError(err => throwError(err)));
  }

  getCartItems(cartData) {
    // let data = JSON.parse(cartData);
    return this.http.post(`${this.apiUrl}/cart/ajax_cart`, cartData);
  }

  storeCartData(cartData) {
    if(this.getCartData()){
      let cartDataArr = [];
      cartDataArr = JSON.parse(localStorage.getItem('cartData'));
      cartDataArr.push(cartData);
      localStorage.setItem('cartData', JSON.stringify(cartDataArr));
    }else{
      localStorage.setItem('cartData', JSON.stringify(cartData));
      let cartDataArr = [];
      cartDataArr.push(JSON.parse(localStorage.getItem('cartData')));
      localStorage.setItem('cartData', JSON.stringify(cartDataArr));
    }
  }

  getCartData(){
    // const cartData = JSON.parse(localStorage.getItem('cartData'));
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    return cartData;
  }

  getCartQty(){
    return this.http.get(`${this.apiUrl}/cart/ajax_cart_items`);
      // .subscribe((data: any) => {
      //   console.log(data.cartQty);
      //   localStorage.setItem('cartQty', data.cartQty);
      // });
  }

  getCartAddedData(){
    let cartDataArr = this.getCartData();
    let user_id = this.cookieService.get('user_id');
    let user_fname = this.cookieService.get('user_fname');
    cartDataArr.unshift({
      user_id: user_id,
      user_fname: user_fname
    });
    return this.http.post(`${this.apiUrl}/cart/cart_added_data`,cartDataArr);
  }

  // getCartQty(){
  //   const cartQty = localStorage.get('cartQty');
  //   return cartQty;
  // }
}// end of class
