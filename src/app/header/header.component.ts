import { Component, OnInit,Input } from '@angular/core';
import {GetDataService} from '../get-data.service';
import{Cuil} from '../cuil';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerInfo:Cuil;
  constructor() { }

  ngOnInit() {

  }

}
