import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const searchIcon = require('../../Images/search.png');

const MovieSearchForm: React.FC = () => {
    const [searchedMovie, setSearchedMovie] = useState<string>('');

    const navigate = useNavigate();

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        setSearchedMovie(e.target.value);
    };

    const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate(`/movielist/${searchedMovie}`);
    };

    return (
        <form className='home__form' onSubmit={onSubmitHandler}>
            <div className='home__inputbox'>
                <input
                    id='home-inputname'
                    className='home__input'
                    placeholder='Search for movies here'
                    onChange={onChangeHandler}
                    value={searchedMovie}
                />
                <button className='btn__search-homepage'>
                    <img
                        src={searchIcon}
                        className='home__btn-img'
                        alt='search icon'
                    />
                </button>
            </div>
        </form>
    );
};

export default MovieSearchForm;
