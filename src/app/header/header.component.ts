import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DataStorageService } from './../services/data-storage.service';
import { ShopingCartService } from '../services/shoping-cart.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit, AfterViewInit {
  categories = [];
  cartData: SafeHtml;
  cartQty$: Observable<any>;
  constructor(
    private dsService: DataStorageService,
    private scService: ShopingCartService,
    private sanitizer: DomSanitizer,
    private router: Router ) {}

  ngOnInit() {
    this.dsService.getHomeData()
      .subscribe((data:any)=>{
        this.categories = data.categories;
      });
    this.cartQty$ = this.scService.getCartQty();  
    this.scService.getCartQty()
      .subscribe((data:any)=>{
        console.log(data);
      });
  }

  ngAfterViewInit(){
    // this.scService.getCartQty()
    //   .subscribe((data: any)=>{
    //     this.cartQty = data.cartQty;
    //   });
  }

  getCartItems(){
    const cartData = this.scService.getCartData();
    this.scService.getCartItems(cartData)
      .subscribe((data: any)=>{
        this.cartData = this.sanitizer.bypassSecurityTrustHtml(data.cart);
          
      });
    // this.scService.cartProductsInfoArrChanged.subscribe((data: any) => {
    //   console.log(data);
    //   this.dsService.getCartItems(data).subscribe((cartData: any)=>{
    //     console.log(cartData);
    //   });
    // });
  }
}
