import { Component, OnInit, ViewChild } from '@angular/core';
import { DataStorageService } from '../services/data-storage.service';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ShopingCartService } from '../services/shoping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  productId;
  productDetails = [];
  bestSellingProducts = [];
  units = [];
  reviews = [];
  wishlists = [];
  groupProducts = [];
  categories = [];
  @ViewChild('f') addToCartForm: NgForm; 
  cartQty = 1;

  constructor(
    private dsSerive: DataStorageService,
    private scService: ShopingCartService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    this.productId = this.route.snapshot.params['id'];
    this.dsSerive.getProductDetails(this.productId).subscribe((data:any)=>{
      this.productDetails = data.product;
      this.bestSellingProducts = data.bsp;
      this.units = data.unit;
      this.reviews = data.review;
      this.wishlists = data.wishlists;
      this.groupProducts = data.group_product;
      this.categories = data.categories;
    });
  }// end of ngOnInit

  getStars(num){
    let stars = '';
    for(let i=0; i<num; i++){
      stars +=  "<img src='assets/images/star.png' />";
    }
    return stars;
  }

  addToCart(form: NgForm) {
    let addToCartData = {
      qty_cart: +form.value.qty_cart,
      product_id: +form.value.product_id,
      cquantity: +form.value.cquantity,
      unit_id: +form.value.unit_id
    };
    if(this.authService.checkAuth()){
      this.scService.saveAddToCart(addToCartData)
        .subscribe((data: any)=>{

          if(data.status == 1){
            this.scService.storeCartData(data.cart);
            // this.scService.setCartQty();
            this.router.navigate(['/shoping-cart']);
          }
        }, (err)=> console.log(err));

    }else{
      this.router.navigate(['/signin']);
    }
  }// end of addToCart

  increaseCartQty(){
    let qty = + this.addToCartForm.form.value.qty_cart;
    qty++;
    this.addToCartForm.form.patchValue({
        qty_cart: qty,
        cquantity: qty
    });
  }

  decreaseCartQty() {
    let qty = + this.addToCartForm.form.value.qty_cart;
    qty--;
    if(qty > 0){
      this.addToCartForm.form.patchValue({
          qty_cart: qty,
          cquantity: qty
      });
    }
  }  

}// end of class
