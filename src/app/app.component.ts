import { Component } from '@angular/core';
import { GiphyService } from './giphy.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exercicio03';

  resultados: any = {};
  Home: boolean = true;

  constructor (private GiphyServ: GiphyService) {}

  onSubmit (BUSCA){
    this.GiphyServ.getGIFS(BUSCA.form.value.palavras_chave)
    .subscribe(resultados => {
      // console.log (resultados);
      this.resultados = resultados;
      this.Home = false;
    })
  }
  
  limpar (){
    this.resultados = [];
    this.Home = true;
  }



}
