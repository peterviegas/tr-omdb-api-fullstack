import React from 'react';
const locationIcon = require('../../Images/location-pin.png');

const ComponentAbout: React.FC = () => (
    <div className='page page--about'>
        <div className='page__heading-box'>
            <div className='page__bg page__about-bg'></div>
            <h2 className='heading__hero'> About PNGC_IMDB </h2>
        </div>
        <div className='page__contents'>
            <div className='page__content1'>
                <div className='page__textBox'>
                    <div className='page__text--large'>WELCOME</div>
                </div>
            </div>
            <div className='page__content2'>
                <div className='page__para'>
                    <p className='page__description--1'>
                        Welcome to
                        <span className='page__bold'>PNGC_IMDB.com</span> where
                        we share information related to IMDB Movies.
                    </p>
                    <p className='page__description--2'>
                        We're dedicated to providing you the very best
                        information and knowledge of Best IMDB Movies
                    </p>
                    <p className='page__description--3'>
                        This website is created by PNGC group.
                    </p>
                </div>
            </div>

            <div className='page__content3'>
                <div className='page__details--1'>
                    <img src={locationIcon} alt={'location icon'} />
                </div>
                <p className='page__details--2'>
                    Meet us @ 14 ipsum valley, Fakelandia street, London city,
                    United Kingdom
                </p>
            </div>
        </div>
    </div>
);

export default ComponentAbout;
