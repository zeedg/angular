import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from './../services/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {
  // cartAddedData: SafeHtml;
  cartAddedData: [];
  // totalQty = 0;
  constructor(
    private scService: ShopingCartService
  ) { }

  ngOnInit() {
    this.scService.getCartAddedData()
      .subscribe((data: any)=>{
        this.cartAddedData = data.cart_return;
        console.log(data.cart_return);
          // this.cartAddedData = this.sanitizer.bypassSecurityTrustHtml(data.cart_return);
      });
  }

  getSubTotal(){
    let totalQty = 0;
    if (this.cartAddedData){
      this.cartAddedData.forEach(function(data:any,i){
        data.forEach(function(d){
          console.log(d);
          totalQty += +d.product_price;
        })
      });
      return totalQty;
    }
  }

}
