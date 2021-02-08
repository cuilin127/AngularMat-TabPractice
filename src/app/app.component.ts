import { Component,OnInit } from '@angular/core';
import {GetDataService} from './get-data.service';
import{Cuil} from './cuil';
import { loadData } from './loadData';
import bData from '../assets/Jsons/Breakfast.json';
import lData from '../assets/Jsons/Launch.json';
import dData from '../assets/Jsons/Dinner.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'cuil-A4';
  myinfo:Cuil;
  breakData: loadData[]=bData.breakfast;
  launData: loadData[]=lData.launch;
  dinnData: loadData[]=dData.dinner;
  constructor(private pService:GetDataService){
  }
  ngOnInit(){
    this.myinfo=this.pService.loadMyInfo();
  }
}

