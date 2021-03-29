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

  // ngOnInit (){
  //   this.HeroServ.getHEROES(70)
  //   .subscribe(resultados => {
  //     this.resultados = resultados;
  //     this.Home = true;
  //     console.log(resultados);
  //   })
  // }

  Supes (){
    this.HeroServ.getHEROES(644)
    .subscribe(resultados => {
      this.resultados = resultados;
      this.Home = false;
    })
  }

  Bats (){
    this.HeroServ.getHEROES(70)
    .subscribe(resultados => {
      this.resultados = resultados;
      this.Home = false;
    })
  }
  
  Wondie (){
    this.HeroServ.getHEROES(720)
    .subscribe(resultados => {
      this.resultados = resultados;
      this.Home = false;
    })
  }


  limpar (){
    this.resultados = [];
    this.Home = true;
  }



}
