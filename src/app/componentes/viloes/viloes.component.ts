import { Component, OnInit } from '@angular/core';
import { VillainsService } from '../../services/villains.service'

@Component({
  selector: 'app-viloes',
  templateUrl: './viloes.component.html',
  styleUrls: ['./viloes.component.sass']
})
export class ViloesComponent implements OnInit {

  resultados: any = {};
  Home: boolean = true;

  constructor(private VillainServ: VillainsService) { }

  Villains (valor){
    this.VillainServ.getVILLAINS(valor)
    .subscribe(resultados => {
      this.resultados = resultados;
      this.Home = false;
      console.log(resultados);
    })
  }

  limpar (){
    this.resultados = [];
    this.Home = true;
  }
  
  ngOnInit(): void {
  }

}





