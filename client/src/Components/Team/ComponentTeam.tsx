import React from 'react';
import TeamCard from './TeamCard';
import { teamMembers } from './TeamDescription';

const ComponentTeam: React.FC = () => (
    <>
        <div className='page '>
            <div className='page__heading-box'>
                <div className='page__bg page--team-bg'></div>
                <h2 className='heading__hero'> Meet the Team </h2>
            </div>
            <div className='page__contents'>
                <div className='page__contents--1'>
                    <div className='page__contents--1a'>
                        <div className='page__textBox'>
                            <div className='page__text--large'>TE-</div>
                            <div className='page__text--large'>-AM</div>
                        </div>
                        <div className='page__team-para'>
                            <div className='page__team-skills'>
                                <div className='page__team-skillBox'>
                                    <div className='page__team-skill'>
                                        <span>Dedicated</span>
                                    </div>
                                    <div className='page__team-skill'>
                                        <span>Hard working</span>
                                    </div>
                                </div>
                                <div className='page__team-skillBox'>
                                    <div className='page__team-skill'>
                                        <span>Committed</span>
                                    </div>
                                    <div className='page__team-skill'>
                                        <span>Loving</span>
                                    </div>
                                </div>
                                <div className='page__team-skillBox'>
                                    <div className='page__team-skill'>
                                        <span>Committed</span>
                                    </div>
                                    <div className='page__team-skill'>
                                        <span>Loving</span>
                                    </div>
                                </div>
                                <></>
                            </div>
                        </div>
                    </div>
                    <div className='page__team-descriptions'>
                        <p className='page__team-description'>
                            We are honest and dedicated Full-Stack Developers
                            who love to code and contribute to the World. Lorem
                            ipsum dolor sit amet, consectetur adipiscing elit,
                            sed do eiusmod tempor incididunt ut labore et dolore
                            magna aliqua. Tempor commodo ullamcorper a lacus
                            vestibulum sed. Nunc sed id semper risus in
                            hendrerit gravida. Sagittis vitae et leo duis ut
                            diam quam nulla. Nunc vel risus commodo viverra
                            maecenas accumsan lacus. Purus ut faucibus pulvinar
                            elementum integer enim neque. Eu sem integer vitae
                            justo eget magna. Eu nisl nunc mi ipsum faucibus
                            vitae aliquet nec ullamcorper. Est ullamcorper eget
                            nulla facilisi etiam dignissim diam quis.
                            Sollicitudin aliquam ultrices sagittis orci a
                            scelerisque purus semper. Eu sem integer vitae justo
                            eget magna fermentum. Sed euismod nisi porta lorem.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className='teamCard'>
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
    </>
);

export default ComponentTeam;
