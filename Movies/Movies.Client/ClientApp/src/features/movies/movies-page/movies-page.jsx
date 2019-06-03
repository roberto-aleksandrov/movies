import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';
     
import { getMovies, deleteMovie, clearMovies } from '../actions/movie-actions';
import MovieCard from './movie-card';

class MoviesPage extends Component { 

    // componentDidMount() {
    //     this.props.getMovies();
    // }

    componentWillUnmount() {
        this.props.clearMovies();
    }

    handleSubmit = (data) => {
        this.props.createMovie(data);
    }

    handleDelete = (id) => {
        this.props.deleteMovie(id);
    }

    handleMovieUpdate = (id) => {
        this.props.history.push(`/movies/update/${id}`);
    }

    render() {
        const { movies, pageInfo } = this.props;

        const movieCards = movies.map(m => <MovieCard key={m.id} handleUpdate={this.handleMovieUpdate} handleDelete={this.handleDelete} {...m} />)

        return  (
            <InfiniteScroll
                useWindow={false}
                pageStart={0}
                loadMore={ this.props.getMovies}
                hasMore={pageInfo.hasMore} 
                loader={<div className='loader' key={0}>Loading ...</div>}
            >   
                <Container>
                    <Row>
                        {movieCards}
                    </Row>
                </Container>
            </InfiniteScroll>   
        );
    }
}

const mapStateToProps = state => ({
    movies: state.moviesReducer.movies,
    pageInfo: state.moviesReducer.pageInfo
});

const mapDispatchToProps = dispatch => ({
    getMovies: (data) => dispatch(getMovies(data)),
    deleteMovie: (data) => dispatch(deleteMovie(data)),
    clearMovies: () => dispatch(clearMovies())
});

export default connect(mapStateToProps, mapDispatchToProps)(MoviesPage);