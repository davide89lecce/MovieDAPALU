import { Injectable }               from '@angular/core';
import { Http, Response }           from '@angular/http';
import { Observable }               from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class SearchService {
  private searchUrl = 'https://api.themoviedb.org/3/search/movie';
  private apiKey = '68b4fe2a513155a58dd0af4adacb281b';
  
  constructor (private http: Http) {
  }

  searchMovies(query: string, page: number) {
    let searchUrl = `${this.searchUrl}?api_key=${this.apiKey}&query=${query}&page=${page}`;

    return this.http.get(searchUrl)
      .map((res) => { return res.json() })
  }

}
