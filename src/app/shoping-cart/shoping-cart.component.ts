import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from './../services/shoping-cart.service';

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor(
    private scService: ShopingCartService
  ) { }

  ngOnInit() {
    let cartData = this.scService.getCartData();
    console.log(cartData);
  }

}
