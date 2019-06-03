import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row } from 'reactstrap';
import InfiniteScroll from 'react-infinite-scroller';

import PhotoCard from './components/photo-card';
import { getPhotos, setPhotosFilters, clearPhotos } from './actions';
import { GET_PHOTOS_QUERY_STRING } from './constants';
import SearchBar from '../../components/search-bar';

import './photos-page.css';

class PhotosPage extends Component { 
    
    componentWillUnmount() {
        this.props.clearPhotos();
    }

    handleSubmit = ({ searchText }) => {
        this.props.setPhotosFilters({ tags: searchText });
        return;
    }

    getPhotos = () => {
        const { pagesInfo, getPhotos, photoFilters } = this.props;

        getPhotos(GET_PHOTOS_QUERY_STRING({
            page: pagesInfo.page + 1,
            tags: photoFilters.tags.join(','),
        }));
    }

    render() {
        const { photos, pagesInfo } = this.props;
        const photoCards = photos.map(photo => <PhotoCard key={photo.id} {...photo}/>);

        return ( 
            <InfiniteScroll
                useWindow={false}
                pageStart={0}
                loadMore={this.getPhotos}
                hasMore={pagesInfo.pages > pagesInfo.page} 
                loader={<div className='loader' key={0}>Loading ...</div>}
            >
                <Container>
                    <Row className='photo-search-bar-row'>
                        <SearchBar 
                            handleSubmit={this.handleSubmit}
                            placeHolder='Enter tag name'
                            searchButtonText='Search...'
                        />
                    </Row>
                    <Row>
                        {photoCards}
                    </Row>
                </Container>
            </InfiniteScroll>   
        )
     }
}

const mapStateToProps = state => ({
    photos: state.photosReducer.photos,
    photoFilters: state.photosReducer.filters,
    pagesInfo: state.photosReducer.pagesInfo
});

const mapDispatchToProps = dispatch => ({
    getPhotos: (data) => dispatch(getPhotos(data)),
    clearPhotos: () => dispatch(clearPhotos()),
    setPhotosFilters: (data) => dispatch(setPhotosFilters(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PhotosPage);