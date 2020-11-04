import {Component, Input, OnInit} from '@angular/core';
import {CarModel} from '../car-all-models/car-all-models.models';
import {HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './car-all-models.component.html',
  styleUrls: ['./car-all-models.component.css']
})
export class CarAllModelsComponent implements OnInit {

  constructor(private http: HttpClient) { }
  CarModel: CarModel[];
  ngOnInit(): void {
    this.http.get('http://lara.toyota.nikolaev.ua/ajax/all_model').subscribe((data: CarModel[]) => this.CarModel = data);
  }

}
