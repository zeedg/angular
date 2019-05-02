import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { SignoutComponent } from './auth/signout/signout.component';
import { HomeComponent } from './home/home.component';
import { GeneralInquiryComponent } from './general-inquiry/general-inquiry.component';
import { NewsComponent } from './news/news.component';
import { RequestCatalogComponent } from './request-catalog/request-catalog.component';
import { HelpComponent } from './help/help.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ShippingComponent } from './shipping/shipping.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ContactComponent } from './contact/contact.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ShopingCartComponent } from './shoping-cart/shoping-cart.component';
import { ShipingPaymentComponent } from './shiping-payment/shiping-payment.component';
import { PaymentComponent } from './payment/payment.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'account', redirectTo: '/signin' },
    { path: 'order', redirectTo: '/signin'},
    { path: 'order-history', redirectTo: '/signin' },
    { path: 'signup',  component : SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'signout', component: SignoutComponent },
    { path: 'home', component: HomeComponent },
    { path: 'inquiry', component: GeneralInquiryComponent },
    { path: 'news', component: NewsComponent },
    { path: 'catalog', component: RequestCatalogComponent },
    { path: 'help', component: HelpComponent },
    { path: 'about', component: AboutUsComponent },
    { path: 'shipping', component: ShippingComponent },
    { path: 'testimonials', component: TestimonialsComponent },
    { path: 'terms', component: TermsConditionsComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'product-details/:id', component: ProductDetailsComponent },
    { path: 'product-listing/:id', component: ProductListingComponent },
    { path: 'shoping-cart', component: ShopingCartComponent },
    { path: 'shiping-payment', component: ShipingPaymentComponent },
    { path: 'payment', component: PaymentComponent }
    
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}