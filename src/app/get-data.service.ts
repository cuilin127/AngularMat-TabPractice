import { Injectable } from '@angular/core';
import {Cuil } from './cuil';
@Injectable({
  providedIn: 'root'
})

export class GetDataService {
  
  constructor() { }
  MyInfo:Cuil ={
    sNumber: 991456394, 
      sName: 'Cui Lin', 
      slogin: 'cuil', 
      sCampus: 'Trafalgar', 
      sTitle: 'Assignment 4'
  };
  loadMyInfo():Cuil
  {
    return this.MyInfo;
  }
}
