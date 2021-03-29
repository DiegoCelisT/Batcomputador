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
  
  constructor (private HeroServ: HeroesService) {}

  onSubmit (BUSCA){
    this.HeroServ.getHEROES(BUSCA.form.value.palavras_chave)
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



}
