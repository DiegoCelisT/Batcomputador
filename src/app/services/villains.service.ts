import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VillainsService {

  constructor(private httpVillains: HttpClient) { }

  getVILLAINS (pesquisa){
    
    //SEM PROXY
    // return this.httpvillains.get ('https://superheroapi.com/api/10158614033284024/'+pesquisa);

    //COM PROXY:
    return this.httpVillains.get ('/api/10158614033284024/'+pesquisa);

  }

}