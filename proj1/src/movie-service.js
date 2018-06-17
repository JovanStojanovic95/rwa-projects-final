import {Movie} from "./movie";

export class MovieService{
    
    constructor(){
        
        this.movies = [];

        this.movies.push(new Movie("Matrix", "1995", "8.7", "Fantastic"));
        this.movies.push(new Movie("Robocap", "1985", "7", "Fantastic"));
        this.movies.push(new Movie("Yes man", "2000", "7.6", "Comedy"));
        this.movies.push(new Movie("Godfather", "1975", "9.8", "Crime"));
        this.movies.push(new Movie("The Simpsons", "1995", "8.7", "Cartoon"));
    }

    getAll(){
        return new Promise((resolve, reject)=>{
            setTimeout(resolve, 1000, this.movies);
        });
    }

    searchByTitle(title){
        return new Promise((resolve, reject)=>{
            setTimeout(resolve, 1000, this.movies.filter(item=>{
                return item.title == title;
            }));
        });
    }

    searchByGenre(genre){
        return new Promise((resolve, reject)=>{
            setTimeout(resolve, 1000, this.movies.filter(item=>{
                return item.genre == genre;
            }));
        });
    }
}