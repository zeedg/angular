import { Component, OnInit, ElementRef } from '@angular/core';
import { DataStorageService } from './../services/data-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {

  sliders = [];
  featureProducts = [];
  newProducts = [];
  configFeature: SwiperOptions;


  constructor(
    private dsService: DataStorageService, 
    private el: ElementRef,
    private router: Router) {}

  ngOnInit() {

      this.configFeature = {
        autoplay: 3000, // Autoplay option having value in milliseconds
        initialSlide: 0, // Slide Index Starting from 0
        slidesPerView: 4, // Slides Visible in Single View Default is 1
        pagination: '.swiper-pagination', // Pagination Class defined
        paginationClickable: true, // Making pagination dots clicable
        nextButton: '.swiper-button-next', // Class for next button
        prevButton: '.swiper-button-prev', // Class for prev button
        spaceBetween: 30 // Space between each Item
      };     
  
    this.dsService.getHomeData().subscribe((data: any) => {
      // console.log(data);
      // data.featured.forEach(function(fp) {
      //   console.log(fp.product_image);
      // });
      this.sliders = data.slider;
      this.featureProducts = data.featured;
      this.newProducts = data.new;
      // console.log(this.sliders);

      this.configFeature = {
        autoplay: 3000, // Autoplay option having value in milliseconds
        initialSlide: 0, // Slide Index Starting from 0
        slidesPerView: 4, // Slides Visible in Single View Default is 1
        pagination: '.swiper-pagination', // Pagination Class defined
        paginationClickable: true, // Making pagination dots clicable
        nextButton: '.swiper-button-next', // Class for next button
        prevButton: '.swiper-button-prev', // Class for prev button
        spaceBetween: 30, // Space between each Item

      };
    });

  }// end of ngOnInit

  // onProductDetails(productId){
  //   this.dsService.getProductDetails(productId);
  //   this.router.navigate(['/product-details']);
  // }


}// end of class
