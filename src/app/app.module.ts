import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { SearchMoviesComponent } from './search/search-movies.component';
import { MoviesService } from './movies/movies.service';
import { SearchService } from './search/search.service';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  
  { path: 'search/:query', component: SearchMoviesComponent },
  
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    SearchMoviesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [
    RouterModule
  ],
  providers: [
    MoviesService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
