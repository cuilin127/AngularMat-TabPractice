import { Component, OnInit,Input } from '@angular/core';
import{Cuil} from '../cuil';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  @Input() footerInfo:Cuil;
  constructor() { }

  ngOnInit() {
  }

}
