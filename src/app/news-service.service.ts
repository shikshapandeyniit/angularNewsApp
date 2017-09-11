import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';



@Injectable()
export class NewsServiceService {

  constructor(private http: Http) {}

search() {
	return this.http.get( 'https://newsapi.org/v1/sources?language=en')
   .map(response => response.json());
}
  searchEntries(searchTerm$: HTMLInputElement) {
    return this.http
   .get('https://newsapi.org/v1/articles?source='+searchTerm$.value+'&sortBy=top&apiKey=4d60cbe4bd014f84bbb26f999f115b8d')
   .map(response => response.json());
  }

  add(fav){
  	console.log(fav)
  	return this.http.post('http://localhost:3000/tour',fav)
  	.map(res=>res.json());
  }
  favorite() { 
      return this.http.get('http://localhost:3000/tour')
      .map(res=>res.json());
    }

    delete(data: any) {
      console.log(data)
      return this.http.delete('http://localhost:3000/tour/'+data._id)
      .map(res =>res.json())
    }
  

}

