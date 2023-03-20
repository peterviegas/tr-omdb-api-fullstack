import React from 'react';
import ErrorComponent from '../ErrorHandler/ErrorComponent';

const ComponentNotFound: React.FC = () => (
    <div className='error__container'>
        <ErrorComponent>Error 404 : Not Found!</ErrorComponent>
    </div>
);

export default ComponentNotFound;
