import { Component, OnInit } from '@angular/core';
import * as $ from '../assets/js/jquery';
import * as jQuery from '../assets/js/jquery.min';
import { DataStorageService } from './services/data-storage.service';
@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private dsService: DataStorageService) {}

} // end of class
