import {Input, Component, OnInit } from '@angular/core';
import { CarMod } from '../car-modification/car-modification.models';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-carsmodifications',
  templateUrl: '../car-modification/car-modification.component.html',
  styleUrls: ['../car-modification/car-modification.component.css']
})
export class CarsmodificationsComponent implements OnInit {
  @Input() carid: number;
  CarMod: CarMod[];

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get('http://lara.toyota.nikolaev.ua/ajax/id_mod?id=' + this.carid).subscribe((data: CarMod[]) => this.CarMod = data);
  }

}
