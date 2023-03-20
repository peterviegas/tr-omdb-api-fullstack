import React from 'react';

interface TeamCardProp {
    image: string;
    name: string;
    job: string;
    description: string;
}

const TeamCard: React.FC<TeamCardProp> = ({
    image,
    name,
    job,
    description,
}) => (
    <div className='teamCard__member'>
        <div className='teamCard__imgBox'>
            <img className='teamCard__img' src={image} alt={name} />
        </div>
        <div className='teamCard__details'>
            <h3>{name}</h3>
            <p className='teamCard__title'>{job}</p>
            <p className='teamCard__description'>{description}</p>
        </div>
    </div>
);

export default TeamCard;
