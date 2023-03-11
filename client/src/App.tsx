import React from 'react';
import MovieList from './Components/Movie/MovieList';
import MovieCard from './Components/Movie/MovieCard';
import MoviesContextProvider from './Components/Movie/Context/MoviesContextProvider';
import './App.css';

const App: React.FC = () => {
    return (
        <div className='App'>
            <MoviesContextProvider>
                <MovieCard />
                {/* <MovieList /> */}
            </MoviesContextProvider>
        </div>
    );
};

export default App;
