import React, { Component } from 'react';
//import './SearchBox.css';
import MyButton from '../components/MyButton';
import ResolveBox from "../components/ResolveBox";


import { connect } from 'react-redux';

import { fetchMovies,fetchMoviesTypes,fetchMoviesTitle } from '../actions/postAction';

class SearchBox extends Component {
    constructor(props)
    {
        super(props);
        this.state = {enteredType :'',  enteredName :''};
        this.ChangeInput = this.ChangeInput.bind(this);
        this.ButtonPressed = this.ButtonPressed.bind(this);
        const movies = [];
    }
    ChangeInput(e)
    {
       this.setState({[e.target.name]:e.target.value});
    }
    ButtonPressed(e)
    {
        if(e===1)
        {
            this.props.fetchMovies();
        }    
        else if(e===3)
        {
            if(this.state.enteredType !=="")
            {
                this.props.fetchMoviesTypes(this.state.enteredType);
            }
           
        }
        else if(e===2)
        {
            if(this.state.enteredName !=="")
            {
                this.props.fetchMoviesTitle(this.state.enteredName);
            }
          
        }
    }
  
  render() {
       this.movies = this.props.posts.map(res => res);

      console.log(this.movies);
    return (
        <div className="search-box">
          
            <MyButton className="button" ButName="Get all"  onClick={this.ButtonPressed}  name={1}/>
            <br/>

            <input className="input" type="text" name="enteredName" value={this.state.enteredName} onChange={this.ChangeInput}></input>

            <MyButton  className="button" ButName="Search by name"  onClick={this.ButtonPressed}  name={2}/>
            <br/>

            <input className="input" type="text" name="enteredType" value={this.state.enteredType} onChange={this.ChangeInput}></input>

            <MyButton className="button" ButName="Search by type"  onClick={this.ButtonPressed}  name={3}/>
            <ResolveBox movies = {this.movies}/>
        </div>
    );
  }
  
}
const mapStateToProps  = state =>({
    posts: state.post.items,
    postV: state.post.item
});

export default connect(mapStateToProps, { fetchMovies,fetchMoviesTypes,fetchMoviesTitle })(SearchBox);