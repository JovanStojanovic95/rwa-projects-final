import { Movie } from "../models/movie";
import { Injectable } from "@angular/core";

@Injectable()
export class MovieService{

    movies: Array<Movie>;

    constructor()
    {
        this.movies = [];
        this.movies.push(new Movie("Rambo 1",1999,21,"Action"));
        this.movies.push(new Movie("Terminator 1",1984,21,"Action"));
        this.movies.push(new Movie("Romper Stomper",2000,0,"Drama"));
        this.movies.push(new Movie("Guardiona of galaxy",2016,56,"sci-fi"));
        this.movies.push(new Movie("The visit",2014,341,"Horror"));
    }

    getAll()
    {
        return new Promise((resolve,reject)=>{
            setTimeout(resolve,1000,this.movies);
        });
    }

    getByName(name)
    {
        return new Promise((resolve,reject)=>{
            setTimeout(resolve,1000,this.movies.filter(mov=>{
                return mov.name == name;
            }));
        });
    }

    getByGenre(genre) {
        return new Promise((resolve,reject)=>{
            setTimeout(resolve,1000,this.movies.filter(mov=>{
                return mov.movieType == genre;
            }));
        });
    }
}
