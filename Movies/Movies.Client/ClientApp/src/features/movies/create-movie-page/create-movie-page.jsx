import React, { Component } from 'react';
import { connect } from 'react-redux';
            
import CreateMovieForm from '../components/create-movie-form';
import { createMovie } from '../actions';
import { getGenres } from '../../genres/actions';

class CreateMoviePage extends Component { 

    componentDidMount() {
        this.props.getGenres();
    }

    handleSubmit = (data) => {
        this.props.createMovie(data);
    }

    render() {
        const { genres }= this.props;
        const genresOptions = genres.map(({id, name}) => ({value: id, label: name}));

        return  (
           <CreateMovieForm 
                genres={genresOptions}
                handleSubmit={this.handleSubmit}                
                initialValues={{title: '', releaseDate: '', description: '', genres: [], releaseDate: ''}}
           />
        );
    }
}

const mapStateToProps = state => ({
    genres: state.genresReducer
});

const mapDispatchToProps = dispatch => ({
    createMovie: (data) => dispatch(createMovie(data)),
    getGenres: () => dispatch(getGenres()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateMoviePage);