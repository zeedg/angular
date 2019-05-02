import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../services/shoping-cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(
    private scService: ShopingCartService
  ) { }

  ngOnInit() {
  }

}
