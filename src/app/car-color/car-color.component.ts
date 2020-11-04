import { Input, Component, OnInit } from '@angular/core';
import {CarColor} from '../car-color/car-color.models';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-carcolor',
  templateUrl: '../car-color/car-color.component.html',
  styleUrls: ['../car-color/car-color.component.css']
})
export class CarcolorComponent implements OnInit {
  @Input() carid: number;
  constructor(private http: HttpClient) { }
  CarColor: CarColor[];
  ngOnInit(): void {
    this.http.get('http://lara.toyota.nikolaev.ua/ajax/mod_color?id=' + this.carid).subscribe((data: CarColor[]) => this.CarColor = data);
  }

}
