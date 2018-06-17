import { Component, OnInit, Input } from '@angular/core';
//import { Observable } from 'rxjs/Rx';
import { MovieService } from '../../service/movie.service';
import { Movie } from '../../models/movie';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';
import { andObservables } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  movies2: Array<Movie>;
  currentService: MovieService;

  constructor(private service: MovieService) {
    this.currentService = service;
   }

  ngOnInit() {
  }

  setResultName(name) {
    this.service.getByName(name).then((items: Array<Movie>)=>{
      this.movies2 = items;
    });
  }

  setResultGenre(genre) {
    this.service.getByGenre(genre).then((items: Array<Movie>)=>{
      this.movies2 = items;});
  }

  setResultAll() {
    this.service.getAll().then((items: Array<Movie>)=>{
      this.movies2 = items;});
  }
}
