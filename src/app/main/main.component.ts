import { Component, OnInit,Input } from '@angular/core';
import {loadData} from '../loadData';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() mealInfo1:loadData;
  @Input() mealInfo2:loadData;
  @Input() mealInfo3:loadData;
  constructor() { }

  ngOnInit() {
  }

}
