import React from 'react';
import TeamCard from './TeamCard';
import { teamMembers } from './TeamDescription';

const ComponentTeam: React.FC = () => (
    <>
        <div className='page'>
            <div className='page__heading-box'>
                <div className='team__bg'></div>
                <h2 className='heading__hero'> Meet the Team </h2>
            </div>

            <div className='team__contents'>
                <div className='team__content1'>
                    <div className='team__text--large'>TEAM</div>
                </div>
                <div className='team__content2'>
                    <div className='team__skills'>
                        <div className='team__skillBox'>
                            <div className='team__skill'>
                                <span>Dedicated</span>
                            </div>
                            <div className='team__skill'>
                                <span>Hard working</span>
                            </div>
                        </div>
                        <div className='team__skillBox'>
                            <div className='team__skill'>
                                <span>Committed</span>
                            </div>
                            <div className='team__skill'>
                                <span>Loving</span>
                            </div>
                        </div>
                        <div className='team__skillBox'>
                            <div className='team__skill'>
                                <span>Committed</span>
                            </div>
                            <div className='team__skill'>
                                <span>Loving</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='team__content3'>
                    <p className='team__description'>
                        We are honest and dedicated Full-Stack Developers who
                        love to code and contribute to the World. Lorem ipsum
                        dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna
                        aliqua. Tempor commodo ullamcorper a lacus vestibulum
                        sed. Nunc sed id semper risus in hendrerit gravida.
                        Sagittis vitae et leo duis ut diam quam nulla. Nunc vel
                        risus commodo viverra maecenas accumsan lacus. Purus ut
                        faucibus pulvinar elementum integer enim neque. Eu sem
                        integer vitae justo eget magna. Eu nisl nunc mi ipsum
                        faucibus vitae aliquet nec ullamcorper. Est ullamcorper
                        eget nulla facilisi etiam dignissim diam quis.
                        Sollicitudin aliquam ultrices sagittis orci a
                        scelerisque purus semper. Eu sem integer vitae justo
                        eget magna fermentum. Sed euismod nisi porta lorem.
                    </p>
                </div>
                <div className='team__content4'>
                    {teamMembers.map((member, i) => (
                        <TeamCard
                            key={i + member.name}
                            name={member.name}
                            image={member.image}
                            job={member.job}
                            description={member.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    </>
);

export default ComponentTeam;
