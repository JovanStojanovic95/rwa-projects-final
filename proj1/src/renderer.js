import {Movie} from "./movie";

export class Renderer{

    constructor(Rx, service){
        this.Rx = Rx;
        this.service = service;
    }

    render(){
        this.renderSearchByTitle();
        this.renderSearchByGenre();
        this.renderShowAll();
        this.renderMovieBox();
    }

    renderSearchByTitle(){
        let divElem = document.createElement("div");
        document.body.appendChild(divElem);

        let inputElem = document.createElement("input");
        inputElem.type = "text";
        inputElem.id = "name-search";
        divElem.appendChild(inputElem);        

        let btn = document.createElement("button");
        btn.id = "btn-search-name";
        btn.innerText = "Search by name";
        divElem.appendChild(btn);

        this.Rx.Observable.fromEvent(btn, 'click').subscribe(() =>{
            let inputElem = document.querySelector('#name-search');
            let title = inputElem.value;
            
            this.service.searchByTitle(title).then(result=>{
                this.renderMovies(result);
            });
        });
    }

    renderSearchByGenre(){
        let divElem = document.createElement("div");
        document.body.appendChild(divElem);

        let inputElem = document.createElement("input");
        inputElem.type = "text";
        inputElem.id = "genre-search";
        divElem.appendChild(inputElem);        

        let btn = document.createElement("button");
        btn.id = "btn-search-genre";
        btn.innerText = "Search by genre";
        divElem.appendChild(btn);

        this.Rx.Observable.fromEvent(btn, 'click').subscribe(() =>{
            let inputElem = document.querySelector('#genre-search');
            let genre = inputElem.value;
            
            this.service.searchByGenre(genre).then(result=>{
                this.renderMovies(result);
            });
        });
    }

    renderShowAll(){
        let divElem = document.createElement("div");
        document.body.appendChild(divElem); 

        let btn = document.createElement("button");
        btn.id = "btn-show";
        btn.innerText = "Show all";
        divElem.appendChild(btn);

        this.Rx.Observable.fromEvent(btn, 'click').subscribe(() =>{            
            this.service.getAll().then(result=>{
                this.renderMovies(result);
            });
        });
    }

    renderMovieBox(){
        document.write(
            `<div id="movie-box" class="movie-box-div"></div>`
        );
    }

    renderMovies(movies){
        let movieBox = document.querySelector('#movie-box');
        this.clearChildNodes(movieBox);

        movies.forEach(movie => {
            this.renderMovie(movie, movieBox);
        });
    }

    renderMovie(movie, movieBox){
        let divElem = document.createElement("div");
        divElem.className = "movie-div";
        movieBox.appendChild(divElem);
        
        this.createParagraph(divElem, movie.title);
        this.createParagraph(divElem, movie.yearRelease);
        this.createParagraph(divElem, movie.score);
        this.createParagraph(divElem, movie.genre);
    }

    createParagraph(parent, text){
        let parg = document.createElement("p");
        parg.innerHTML = text;
        parent.appendChild(parg);
    }

    clearChildNodes(myNode){
        if(myNode == null)
            return;

        while (myNode.firstChild) {
            myNode.removeChild(myNode.firstChild);
        }
    }
}