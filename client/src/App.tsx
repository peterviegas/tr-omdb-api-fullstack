import React from 'react';
import MovieList from './Components/Movie/MovieList';
import MoviePage from './Components/Movie/MoviePage';
import MoviesContextProvider from './Components/Movie/Context/MoviesContextProvider';
import './App.css';

const App: React.FC = () => {
    return (
        <div className='App'>
            <MoviesContextProvider>
                {/* <MoviePage /> */}
                <MovieList />
            </MoviesContextProvider>
        </div>
    );
};

export default App;
