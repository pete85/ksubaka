import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/index';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  readonly ROOT_URL = 'http://www.omdbapi.com/?apikey=63484010';

  constructor(private _http: HttpClient) { }

  getFilms(title, type, page) {
    return this._http.get(this.ROOT_URL, {params: {s: title, type: type, page: page}});
  }
}
