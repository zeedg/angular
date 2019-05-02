import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../services/data-storage.service';

@Component({
  selector: 'app-product-listing',
  templateUrl: './product-listing.component.html',
  styleUrls: ['./product-listing.component.css']
})
export class ProductListingComponent implements OnInit {

  categoryId;
  grid = false;
  products = [];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dsService: DataStorageService
  ) { }

  ngOnInit() {
    this.categoryId = this.route.snapshot.params['id'];
    this.dsService.getProductListing(this.categoryId).subscribe(
      (data: any) => {
        this.products = data.product;
      }
    );
  }

  formatPrice(proPrice){
    let twoPlacedFloat = parseFloat(proPrice).toFixed(2);
    return twoPlacedFloat;
  }

  submitFilter(gridMode){
    this.grid = gridMode;
    this.router.navigate(['/product-listing', this.categoryId]);
  }

}// end of class
