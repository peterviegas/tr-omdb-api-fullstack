import React from 'react';
const locationIcon = require('../../Images/location-pin.png');
const welcomeImg = require('../../Images/welcome.png');

const ComponentAbout: React.FC = () => (
    <div className='about'>
        <div className='about__img-box'>
            <div className='about__bg'></div>
            <h2 className='heading__hero'> About PNGC_IMDB </h2>
        </div>
        <div className='about__contents'>
            <div className='about__contents--1'>
                <div className='about__contents--1a'>
                    <div className='about__img'>
                        <img src={welcomeImg} alt={'welcome'} />
                    </div>
                    <div className='about__para'>
                        <p className='about__description--1'>
                            Welcome to <b>PNGC_IMDB.com</b> where we share
                            information related to IMDB Movies.
                        </p>
                        <p className='about__description--2'>
                            We're dedicated to providing you the very best
                            information and knowledge of Best IMDB Movies
                        </p>
                        <p className='about__description--3'>
                            This website is created by PNGC group.
                        </p>
                    </div>
                </div>
            </div>
            <div className='about__contents--2'>
                <div className='about__details--1'>
                    <img src={locationIcon} alt={'location icon'} />
                </div>
                <p className='about__details--2'>
                    Meet us @ 14 ipsum valley, Fakelandia street, London city,
                    United Kingdom
                </p>
            </div>
        </div>
    </div>
);

export default ComponentAbout;
