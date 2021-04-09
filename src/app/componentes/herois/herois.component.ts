import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service'

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.sass']
})
export class HeroisComponent implements OnInit {

  resultados: any = {};
  Home: boolean = true;

  constructor(private HeroServ: HeroesService) { }

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



  ngOnInit(): void {
  }

}




// import { Component, OnInit } from '@angular/core';
// import { HeroesService } from '../../services/heroes.service'

// @Component({
//   selector: 'app-herois',
//   templateUrl: './herois.component.html',
//   styleUrls: ['./herois.component.sass']
// })
// export class HeroisComponent implements OnInit {

//   resultados: any = {};
//   Home: boolean = true;

//   constructor(private HeroServ: HeroesService) { }
//   Heroes (valor){
//     this.HeroServ.getHEROES(valor)
//     .subscribe(resultados => {
//       this.resultados = resultados;
//       this.Home = false;
//       console.log(resultados);
//     })
//   }

//   // Supes (){
//   //   this.HeroServ.getHEROES(644)
//   //   .subscribe(resultados => {
//   //     this.resultados = resultados;
//   //     this.Home = false;
//   //     console.log(resultados)
//   //   })
//   // }
  
//   // Wondy (){
//   //   this.HeroServ.getHEROES(720)
//   //   .subscribe(resultados => {
//   //     this.resultados = resultados;
//   //     this.Home = false;
//   //     console.log(resultados)
//   //   })
//   // }

//   limpar (){
//     this.resultados = [];
//     this.Home = true;
//   }

// }