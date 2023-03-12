import { NavLink } from 'react-router-dom';
import { MovieType } from './Type/MovieType.type';

export const RenderMoviesList = (movies: Array<MovieType>, id: string = '') => {
    return movies.map((movie) => {
        const { Title, Year, imdbID, Poster } = movie;
        return (
            <div key={imdbID} className='movieList__item'>
                {/* This could be a NavLink to=`/watch/${imdbID}` */}
                <NavLink to={`/movie/${id}`} className='movieList__link'>
                    <div className='movieList__img-container'>
                        <img
                            className='movieList__img'
                            src={Poster}
                            alt={Title}
                        />
                    </div>
                    <h6 className='movieList__heading'>{`${Title}, ${Year}`}</h6>
                </NavLink>
            </div>
        );
    });
};
