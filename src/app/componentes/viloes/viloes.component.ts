import { Component, OnInit } from '@angular/core';
import { VillainsService } from '../../services/villains.service'
import { VillainslocalService } from '../../services/villainslocal.service'

@Component({
  selector: 'app-viloes',
  templateUrl: './viloes.component.html',
  styleUrls: ['./viloes.component.sass']
})
export class ViloesComponent implements OnInit {

  resultados: any = {};
  Home: boolean = true;

  constructor(private VillainServ: VillainsService, private VillainLocalServ: VillainslocalService) { }

  //Consumo de serviço local:
  VillainsLocal (valor){
    this.resultados = this.VillainLocalServ.getViloesLocal (valor);
    this.Home = false;
    window.scroll(0,0);
  }

  //Consumo de API remota
  Villains (valor){
    this.VillainServ.getVILLAINS(valor)
    .subscribe(resultados => {
      this.resultados = resultados;
      this.Home = false;
      // console.log(resultados);
    })
  }

  limpar (){
    this.resultados = [];
    this.Home = true;
    window.scroll(0,0);
  }
  
  ngOnInit(): void {
  }

}





