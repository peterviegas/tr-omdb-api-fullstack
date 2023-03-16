import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ComponentRouter from './Components/Router/router';

const App: React.FC = () => {
    return (
        <div className='App'>
            <BrowserRouter>
                <ComponentRouter />
            </BrowserRouter>
        </div>
    );
};
export default App;
