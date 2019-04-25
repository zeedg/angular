import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './../../services/data-storage.service';

@Component({
  selector: 'app-category-dropdown',
  templateUrl: './category-dropdown.component.html',
  styleUrls: ['./category-dropdown.component.css']
})
export class CategoryDropdownComponent implements OnInit {

  categories = [];
  constructor(private dsService: DataStorageService) { }

  ngOnInit() {
    this.dsService.getHomeData().subscribe((data: any) => {
      // data.featured.forEach(function(fp) {
      //   console.log(fp.product_image);
      // });
      
      let catsArr = [];
      catsArr = data.categories;
      // let mainArr = [];
      let mainCats = [];
      catsArr.forEach(function(cat,i){
        // let mainCats = [];
        if(cat.category_parent == 0){
          mainCats[i] = {
            category_id : cat.category_id,
            category_title: cat.category_title,
            sub_cats: []
          };
      
          catsArr.forEach(function(catJ,j){
            // let mainCats[i][j] = [];
            if(cat.category_id == catJ.category_parent){
              if(cat.category_id != catJ.category_id){
              mainCats[i]['sub_cats'].push({
                category_id: catJ.category_id,
                category_title: catJ.category_title
              });
            }
            }
          });
      }
        // mainArr.push(mainCats[i]);
      });
      // this.categories = mainArr;
      this.categories = mainCats;
      console.log(mainCats);
    });
  }
}

