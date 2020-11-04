import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CarcolorComponent } from './car-color/car-color.component';
import { CarsmodificationsComponent } from './car-modification/car-modification.component';
import { CarAllModelsComponent } from './car-all-models/car-all-models.component';
import { CarEngineComponent } from './car-engine/car-engine.component';

@NgModule({
  declarations: [
    AppComponent,
    CarcolorComponent,
    CarsmodificationsComponent,
    CarAllModelsComponent,
    CarEngineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [CarAllModelsComponent]
})
export class AppModule { }
