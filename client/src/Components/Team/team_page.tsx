import React from 'react';

const ComponentTeamPage: React.FC = () => (
    <>
        <div>
            <div className='row'>
                <div className='column'>
                    <div className='card'>
                        <div className='movieList__img-container'>
                            <img
                                className='movieList__img'
                                src={require('../../Images/peter.jpg')}
                                alt='peter'
                            />
                        </div>
                        <div className='container'>
                            <h2>Peter Veigas</h2>
                            <p className='title'>CEO & Founder</p>
                            <p>Some text that describes Peter</p>
                            <p>
                                <button className='button'> Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='column'>
                    <div className='card'>
                        <div className='movieList__img-container'>
                            <img
                                className='movieList__img'
                                src={require('../../Images/peter.jpg')}
                                alt='Neema'
                            />
                        </div>
                        <div className='container'>
                            <h2>Neema Sheby</h2>
                            <p className='title'>CEO & Founder</p>
                            <p>Some text that describes Neema</p>
                            <p>
                                <button className='button'> Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='column'>
                    <div className='card'>
                        <div className='movieList__img-container'>
                            <img
                                className='movieList__img'
                                src={require('../../Images/peter.jpg')}
                                alt='Glen'
                            />
                        </div>

                        <div className='container'>
                            <h2>Glen Dovey</h2>
                            <p className='title'>CEO & Founder</p>
                            <p>Some text that describes Glen</p>
                            <p>
                                <button className='button'> Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='column'>
                    <div className='card'>
                        <div className='movieList__img-container'>
                            <img
                                className='movieList__img'
                                src={require('../../Images/peter.jpg')}
                                alt='Cem'
                            />
                        </div>

                        <div className='container'>
                            <h2>Cem Saydam</h2>
                            <p className='title'>CEO & Founder</p>
                            <p>Some text that describes Cem</p>
                            <p>
                                <button className='button'> Contact</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
);

export default ComponentTeamPage;
