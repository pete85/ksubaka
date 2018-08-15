import { Component, OnInit } from '@angular/core';
import {Film} from '../_models/movies';
import {MoviesService} from '../_services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  sub_film: any;
  film: any;

  constructor(private _moviesService: MoviesService) { }

  ngOnInit() {

    this.sub_film =
      this._moviesService.film.subscribe(film => {
        this.film = film;
      })
  }

}
