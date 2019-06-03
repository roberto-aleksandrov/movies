import PhotosPage from '../features/photos-page';
import CreateUserPage from '../features/users/create-user-page';
import UsersPage from '../features/users/users-page';
import UpdateUserPage from '../features/users/update-user-page';
import CreateMoviePage from '../features/movies/create-movie-page';
import MoviesPage from '../features/movies/movies-page';
import UpdateMoviePage from '../features/movies/update-movie-page';

const routesConfig = {
    photos: {
        path: '/',
        component: PhotosPage
    },
    createUser: {
        path: '/users/create',
        component: CreateUserPage
    },    
    updateUser: {
        path: '/users/update/:id',
        component: UpdateUserPage
    },
    users: {
        path: '/users',
        component: UsersPage
    },
    createMovie: {
        path: '/movies/create',
        component: CreateMoviePage
    },
    movies: {
        path: '/movies',
        component: MoviesPage
    },
    updateMovie: {
        path: '/movies/update/:id',
        component: UpdateMoviePage
    }
}

export default routesConfig;