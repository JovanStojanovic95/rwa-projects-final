export class Movie {

    name: string;
    year: number;
    copies: number;
    movieType: string;

    constructor(name,year,copies,movieType)
    {
        this.name = name;
        this.year = year;
        this.copies = copies;
        this.movieType = movieType;
    }
}
