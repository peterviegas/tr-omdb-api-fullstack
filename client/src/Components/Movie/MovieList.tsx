import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import ErrorComponent from '../ErrorHandler/ErrorComponent';
import { MoviesContext, MoviesContextType } from './Context/MoviesContext';
import { RenderMoviesList } from './RenderMoviesList';
import MUIPagination from '../Pagination/MUIPagination';
const searchIcon = require('../../Images/search.png');

// const movieArr = [
//     {
//         Title: 'Last Action Hero',
//         Year: '1993',
//         imdbID: 'tt0107362',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OT…zY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
//     },
//     {
//         Title: 'Looney Tunes: Back in Action',
//         Year: '2003',
//         imdbID: 'tt0318155',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BMzRiOWNkOW…zhlNTk2XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg',
//     },
//     {
//         Title: 'A Civil Action',
//         Year: '1998',
//         imdbID: 'tt0120633',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BZmEzNjhiZW…GFkMzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg',
//     },
//     {
//         Title: 'An Action Hero',
//         Year: '2022',
//         imdbID: 'tt15600222',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BMDJiOTdmMG…WMzZTg0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_SX300.jpg',
//     },
//     {
//         Title: 'Missing in Action',
//         Year: '1984',
//         imdbID: 'tt0087727',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BNDczNDljZT…mFjMDQyXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
//     },
//     {
//         Title: 'Action Point',
//         Year: '2018',
//         imdbID: 'tt6495770',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BMjEyMTU5MTk1N15BMl5BanBnXkFtZTgwMzIzMzczNTM@._V1_SX300.jpg',
//     },
//     {
//         Title: 'Action Jackson',
//         Year: '1988',
//         imdbID: 'tt0094612',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BYjc0Y2E2Zj…zFmMjI4XkEyXkFqcGdeQXVyNjc5NjEzNA@@._V1_SX300.jpg',
//     },
//     {
//         Title: '321 Action',
//         Year: '2020',
//         imdbID: 'tt13423846',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BYTRmYzgyZj…DExNWE5XkEyXkFqcGdeQXVyNjI2ODk3NTM@._V1_SX300.jpg',
//     },
//     {
//         Title: 'Missing in Action 2: The Beginning',
//         Year: '1985',
//         imdbID: 'tt0089604',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BOTFhNTdiND…jBjNTBhXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg',
//     },
//     {
//         Title: 'Class Action',
//         Year: '1991',
//         imdbID: 'tt0101590',
//         Type: 'movie',
//         Poster: 'https://m.media-amazon.com/images/M/MV5BNWY5Mjk4Zm…zA3MDIzXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg',
//     },
// ];

const MovieList: React.FC = () => {
    const { movies, errorMsg, count, page, onChange } =
        useContext<MoviesContextType>(MoviesContext);

    const location = useLocation();
    const { pathname } = location;

    console.log(pathname);
    const searchedMovieName = pathname.split('/')[2];

    return (
        <>
            <div className='heading__img'>
                <img
                    src={searchIcon}
                    className='home__btn-img'
                    alt='search icon'
                />
                <h3 className='heading__3'>
                    {`Search Results for : ${searchedMovieName}`}
                </h3>
            </div>

            <div className='pagination__down-arrow'></div>
            <MUIPagination count={count} page={page} onChange={onChange} />
            <div className='movieList'>
                {RenderMoviesList(movies, searchedMovieName, () => {})}
            </div>
            <MUIPagination count={count} page={page} onChange={onChange} />
            {errorMsg && <ErrorComponent>{errorMsg}</ErrorComponent>}
        </>
    );
};

export default MovieList;
