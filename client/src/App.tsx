import React from 'react'
import MovieList from './Components/Movie/MovieList'
import './App.css'
import { BrowserRouter } from 'react-router-dom';
import ComponentRouter from './Components/router';

const App: React.FC = () => {

    return <div className="App">

        <BrowserRouter>

            <ComponentRouter />

        </BrowserRouter>

    </div>

}

export default App
