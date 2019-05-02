import { AuthService } from './services/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// third party imports
import { SwiperModule } from 'angular2-useful-swiper';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { DataStorageService } from './services/data-storage.service';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CategoryDropdownComponent } from './header/category-dropdown/category-dropdown.component';
import { GeneralInquiryComponent } from './general-inquiry/general-inquiry.component';
import { NewsComponent } from './news/news.component';
import { HelpComponent } from './help/help.component';
import { RequestCatalogComponent } from './request-catalog/request-catalog.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { ShopingCartService } from './services/shoping-cart.service';
import { ShipingPaymentComponent } from './shiping-payment/shiping-payment.component';
import { PaymentComponent } from './payment/payment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    HomeComponent,
    CategoryDropdownComponent,
    GeneralInquiryComponent,
    NewsComponent,
    HelpComponent,
    RequestCatalogComponent,
    AboutUsComponent,
    ShippingComponent,
    TestimonialsComponent,
    TermsConditionsComponent,
    PrivacyPolicyComponent,
    ContactComponent,
    ProductDetailsComponent,
    ProductListingComponent,
    ShopingCartComponent,
    SignoutComponent,
    ShipingPaymentComponent,
    PaymentComponent
  ],
  imports: [

  BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    SwiperModule,
    CarouselModule.forRoot()
  ],
  providers: [
    DataStorageService, 
    AuthService,
    ShopingCartService,
    CookieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
