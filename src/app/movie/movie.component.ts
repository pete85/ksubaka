import { Component, OnInit } from '@angular/core';
import {Film} from '../_models/movies';
import {MoviesService} from '../_services/movies.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  sub_film: any;
  sub_films: any;
  film: Film;
  films: Film[];

  constructor(private _moviesService: MoviesService,
              private _router: Router) { }

  ngOnInit() {

    if (this._moviesService.filmSource.value !== null) {
      this.sub_film =
        this._moviesService.film.subscribe(film => {
          this.film = film;
        });
    } else {
      this._router.navigateByUrl('home');
    }

    if (this._moviesService.filmsSource.value !== null) {
      this.sub_films =
        this._moviesService.films.subscribe(films => {
          this.films = films;
        });
    } else {
      this._router.navigateByUrl('home');
    }

  }

  backToList() {
      this._router.navigateByUrl('home');
  }
}
