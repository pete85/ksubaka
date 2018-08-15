import { Component, OnInit } from '@angular/core';
import {MoviesService} from './_services/movies.service';
import {MatSnackBar} from '@angular/material';
import {Router} from '@angular/router';
import {Film} from './_models/movies';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{


  constructor() { }

  ngOnInit() {
  }


}
