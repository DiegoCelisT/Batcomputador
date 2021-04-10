import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VillainsService {

  constructor(private httpVillains: HttpClient) { }

  getVILLAINS (pesquisa){
    
    return this.httpVillains.get ('https://superheroapi.com/api/10158614033284024/'+pesquisa);

  }

}