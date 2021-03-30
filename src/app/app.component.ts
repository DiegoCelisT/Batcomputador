import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SecretInvasion';

  resultados: any = {};
  Home: boolean = true;
  // Superman: any = 644;
  
  constructor (private HeroServ: HeroesService) {}

  Heroes (valor){
    this.HeroServ.getHEROES(valor)
    .subscribe(resultados => {
      this.resultados = resultados;
      this.Home = false;
      console.log(resultados);
    })
  }

  // Supes (){
  //   this.HeroServ.getHEROES(644)
  //   .subscribe(resultados => {
  //     this.resultados = resultados;
  //     this.Home = false;
  //     console.log(resultados)
  //   })
  // }

  // Bats (){
  //   this.HeroServ.getHEROES(70)
  //   .subscribe(resultados => {
  //     this.resultados = resultados;
  //     this.Home = false;
  //     console.log(resultados)
  //   })
  // }
  
  // Wondy (){
  //   this.HeroServ.getHEROES(720)
  //   .subscribe(resultados => {
  //     this.resultados = resultados;
  //     this.Home = false;
  //     console.log(resultados)
  //   })
  // }

  // Flash (){
  //   this.HeroServ.getHEROES(265)
  //   .subscribe(resultados => {
  //     this.resultados = resultados;
  //     this.Home = false;
  //     console.log(resultados)
  //   })
  // }

  // GL_Hal (){
  //   this.HeroServ.getHEROES(306)
  //   .subscribe(resultados => {
  //     this.resultados = resultados;
  //     this.Home = false;
  //     console.log(resultados)
  //   })
  // }

  // Shazam (){
  //   this.HeroServ.getHEROES(156)
  //   .subscribe(resultados => {
  //     this.resultados = resultados;
  //     this.Home = false;
  //     console.log(resultados)
  //   })
  // }

  // MartianManhunter (){
  //   this.HeroServ.getHEROES(432)
  //   .subscribe(resultados => {
  //     this.resultados = resultados;
  //     this.Home = false;
  //     console.log(resultados)
  //   })
  // }

  limpar (){
    this.resultados = [];
    this.Home = true;
  }



}
