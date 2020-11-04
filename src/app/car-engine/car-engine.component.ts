import {Component, Input, OnInit} from '@angular/core';
import { CarEngine } from '../car-engine/car-engine-models';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-car-engine',
  templateUrl: '../car-engine/car-engine.component.html',
  styleUrls: ['../car-engine/car-engine.component.css']
})
export class CarEngineComponent implements OnInit {

  @Input() carid: number;
  constructor(private http: HttpClient) { }
  CarEngine: CarEngine[];
  ngOnInit(): void {
    // tslint:disable-next-line:max-line-length
    this.http.get('http://lara.toyota.nikolaev.ua/ajax/mod_eng_gear?id=' + this.carid).subscribe((data: CarEngine[]) => this.CarEngine = data);
  }

}
