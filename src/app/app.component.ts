import { Component, OnInit } from '@angular/core';
import {MoviesService} from './_services/movies.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  // films: Film[];
  films: any[];

  constructor(private _moviesService: MoviesService,
              public snackBar: MatSnackBar) {
  }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this._moviesService.getFilms('john', 'movie')
      .subscribe(
        data => {
          if (data !== null) {
            this.films = data['Search'];
            console.log('Films: ', this.films);
          }
        },
        (error) => {
          // this.showAlert(JSON.parse(error._body));
          console.log(error);
        },
        () => {
          console.log('finished retrieving data');
        });
  }

  private showAlert(message) {
    const status_code = message.request_status;
    const status_message = message.request_msg;
    const error_message = 'Error Code: ' + status_code + ':  ' + status_message;
    this.snackBar.open(error_message, null, {duration: 10000});
  }

}
