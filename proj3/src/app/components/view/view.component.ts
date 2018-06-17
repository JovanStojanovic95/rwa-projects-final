import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  @Input() movies: Movie[]; //moze od spolja da se ubacuje

  constructor() { 
    this.movies = [];
  }

  ngOnInit() {
  }

}
