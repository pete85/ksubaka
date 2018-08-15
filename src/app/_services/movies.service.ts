import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';
import {Film} from '../_models/movies';
import {BehaviorSubject} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private filmSource = new BehaviorSubject<any>(null);
  film = this.filmSource.asObservable();

  readonly ROOT_URL = 'http://www.omdbapi.com/?apikey=63484010';

  constructor(private _http: HttpClient) { }

  getFilms(title, type, page) {
    return this._http.get(this.ROOT_URL, {params: {s: title, type: type, page: page}});
  }

  getFilm(id) {
    return this._http.get(this.ROOT_URL, {params: {i: id}});
  }

  publishFilm(film: Film) {
    this.filmSource.next(film);
  }
}
