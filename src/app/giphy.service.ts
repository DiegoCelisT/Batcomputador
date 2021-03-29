import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GiphyService {

  constructor(private httpzao: HttpClient) { }

  private api_key = 'sTn1PuIHZHQwyTRA7bR2TXGQjja2nV3T';
  
  private limit = '24';

  getGIFS (pesquisa){
    // console.log (pesquisa)
    
    return this.httpzao.get ('https://api.giphy.com/v1/gifs/search?api_key='+this.api_key+'&q='+pesquisa+'&limit='+this.limit+'&offset=0&rating=g&lang=pt');   

  }

}
