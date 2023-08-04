import React from 'react';

const About = () => {
    return (
        <div name="about"
            className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
                </div>
                <p className='text-xl mt-20'>I am a MERN developer, very enthusiastic about learning new things, love to be punctual. <br /> I am very adaptable, and I can easily adapt to different types of work environments. I have <br /> a warm and engaging personality and the ability to function individually or as part of a team.</p>
            </div>
        </div>
    );
};

export default About;