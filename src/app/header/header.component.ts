import { Component, OnInit } from '@angular/core';
import { DataStorageService } from './../services/data-storage.service';

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  categories = [];

  constructor(private dsService: DataStorageService) {}

  ngOnInit() {
    this.dsService.getHomeData()
      .subscribe((data:any)=>{
        this.categories = data.categories;
      });
  }
}
