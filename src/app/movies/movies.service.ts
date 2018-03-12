import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Movie } from './movie';


@Injectable()
export class MoviesService {
  private url = 'https://api.themoviedb.org/3/movie/';
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';

  constructor (private http: Http) { }

  

  searchMovies(query: string) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}`; //&language=${this.language}&query=${query}`;

    return this.http.get(searchUrl)
      .map((res) => { return res.json() })
  }

}
