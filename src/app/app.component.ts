import { Component } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Batcomputadora';

  resultados: any = {};
  Home: boolean = true;
  
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
  
  // Wondy (){
  //   this.HeroServ.getHEROES(720)
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
