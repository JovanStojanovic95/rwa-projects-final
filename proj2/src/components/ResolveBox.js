import React, { Component } from 'react';

class ResolveBox extends Component {
    render() 
    { 
      const renderMovies = this.props.movies.map(pos =>
        (
            <div className="movie-div">
                <p>Title : {pos.title}</p>
                <p>Year : {pos.yearRelease}</p>
                <p>Score : {pos.score}</p>
                <p>Genre : {pos.genre}</p>
                <p>------------------</p>
            </div>
        ));
        return (
            <div  key="1">
               {renderMovies}
            </div>
        )
    }
  
}

export default ResolveBox;
