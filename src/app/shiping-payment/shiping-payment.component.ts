import { Component, OnInit } from '@angular/core';
import { ShopingCartService } from '../services/shoping-cart.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-shiping-payment',
  templateUrl: './shiping-payment.component.html',
  styleUrls: ['./shiping-payment.component.css']
})
export class ShipingPaymentComponent implements OnInit {

  constructor(
    private scService: ShopingCartService,
    private cookieService: CookieService
  ) { }

  ngOnInit() {
    
  }

}
