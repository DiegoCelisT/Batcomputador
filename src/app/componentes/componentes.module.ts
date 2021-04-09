import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroisComponent } from './herois/herois.component';
import { ViloesComponent } from './viloes/viloes.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroisComponent,
    ViloesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    HeroisComponent,
    ViloesComponent
  ]
})
export class ComponentesModule { }
