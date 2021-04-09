import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private httpheroes: HttpClient) { }

  // private api_key = '7a223801639512aa33a05f17b668c180';
  // private hash = '0cb41251b618902745425a61f26205e4';
  // private api_key = '7a223801639512aa33a05f17b668c180';
  // private hash = '0bbee75c741a95598aea6307dcd21068';
  
  // private limit = '24';

  getHEROES (pesquisa){
    // console.log (pesquisa)

    // return this.httpheroes.get ('https://gateway.marvel.com/v1/public/characters?ts=1&apikey='+this.api_key+'&hash='+this.hash);
    // return this.httpheroes.get ('https://superheroapi.com/api/10158614033284024/'+pesquisa);
    return this.httpheroes.get ('https://superheroapi.com/api/10158614033284024/'+pesquisa);

  }

}
