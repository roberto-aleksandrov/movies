import React, { Component } from 'react';
import { connect } from 'react-redux';
            
import UpsertMovieForm from '../components/upsert-movie-form';
import { getMovie, updateMovie } from '../actions';
// import { getGenres } from '../../genres/actions';

class UpdateMoviePage extends Component { 

    componentDidMount() {
        const id = this.props.match.params.id;

        this.props.getMovie(id);
    }

    handleSubmit = (data) => {
        this.props.updateMovie(data);
    }

    render() {
        const { genres, movie }= this.props;
        // const genresOptions = genres.map(({id, name}) => ({value: id, label: name}));

        return  (
           <React.Fragment>
               {movie && 
                    <UpsertMovieForm 
                        title='Update Movie'
                        handleSubmit={this.handleSubmit}                
                        initialValues={movie}
                    />
           }
           </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    genres: state.genresReducer,
    movie: state.updateMovieReducer
});

const mapDispatchToProps = dispatch => ({
    updateMovie: (data) => dispatch(updateMovie(data)),
    getMovie: (id) => dispatch(getMovie(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateMoviePage);