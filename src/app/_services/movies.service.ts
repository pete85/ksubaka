import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly ROOT_URL = 'http://www.omdbapi.com';

  movies: Observable<any>;

  constructor(private _http: HttpClient) { }

  getFilms() {
    return this._http.get(this.ROOT_URL);
  }
}
