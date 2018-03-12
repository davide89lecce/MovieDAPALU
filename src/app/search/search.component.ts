import { Component, OnInit }        from '@angular/core';
import { Router }                   from '@angular/router';
import { MoviesService }            from '../movies/movies.service';

declare var $: any; 

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  
  holder: string;

  constructor(
    private moviesService: MoviesService,
    private router: Router
  ) { }

  ngOnInit() {
         
     this.holder = 'Quale film stai cercando?'
     this.sticky();
  }

  sticky() {
    $('#search').visibility({
      type: 'fixed',
      once: true,
     
    });
  }

  search(query: string) {
    if (/\S/.test(query)) {
      this.router.navigate(['/search', query]);
    }
  }

}
