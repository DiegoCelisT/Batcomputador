import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service'
import { HeroeslocalService } from "../../services/heroeslocal.service"

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.sass']
})
export class HeroisComponent implements OnInit {

  resultados: any = {};
  Home: boolean = true;

  constructor(private HeroServ: HeroesService, private HeroesLocalServ: HeroeslocalService) { }

  //Dados vindos do serviço local
  HeroesLocal (valor){
    this.resultados = this.HeroesLocalServ.getHeroisLocal (valor);
    this.Home = false;
    console.log(this.resultados);
  }

  //Dados vindos do serviço com API externa
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
  // } //Powered by DiegoCelisT

  //Objeto trazido daquele arquivo personagens.json:
  


  limpar (){
    this.resultados = [];
    this.Home = true;
  }

  ngOnInit(): void {
  }

}