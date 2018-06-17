import { FETCH_ALL, FETCH_BY_NAME, FETCH_BY_TYPE } from './type';
import {MovieService } from "../service/movie-service";


export function fetchMovies()
{    
    let service = new  MovieService();
    console.log("featching");
    return function(dispatch){
        service.getAll()
        .then(res => res)
        .then(posts => dispatch({
            type: FETCH_ALL,
            payLoad: posts
        }));
    
    }
}

export function fetchMoviesTypes(value)
{    
    let service = new  MovieService();
    console.log("featching");
    return function(dispatch){
        service.searchByGenre(value)
        .then(res => res)
        .then(data => dispatch({
            type: FETCH_BY_TYPE,
            value,
            payLoad: data
        }));
        
    }
}


export function fetchMoviesTitle(value)
{    
    let service = new  MovieService();
    console.log("featching");
    return function(dispatch){
        service.searchByTitle(value)
        .then(res => res)
        .then(data => dispatch({
            type: FETCH_BY_NAME,
            value,
            payLoad: data
        }));
        
    }
}

