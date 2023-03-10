import React from 'react'
//import MovieList from './Components/Movie/MovieList'
import MovieCard from './Components/Movie/MovieCard'
import './App.css'

const App: React.FC = () => {
    return <div className="App">
        {/* <MovieList/> */}
        <MovieCard />
    </div>
}

export default App
