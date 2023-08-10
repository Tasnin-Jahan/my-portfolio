import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
import img1 from '../assets/portfolio/img1.png';
import img2 from '../assets/portfolio/img2.png';
import img3 from '../assets/portfolio/img3.png';
import img4 from '../assets/portfolio/img4.png';

const Portfolio = () => {
    AOS.init();
    const portfolios = [
        {
            id: 1,
            src: img1,
            liveSiteCode: 'https://bicycle-shop-736a3.web.app/',
            code: 'https://github.com/Tasnin-Jahan/niche-website-client-site',
        },
        {
            id: 2,
            src: img2,
            liveSiteCode: 'https://nifty-bhaskara-70c1fb.netlify.app/',
            code: 'https://github.com/Tasnin-Jahan/ranga-store-fix',
        },
        {
            id: 3,
            src: img3,
            liveSiteCode: 'https://dental-healthcare-services.web.app/home#home',
            code: 'https://github.com/Tasnin-Jahan/dental-healthcare-services',
        },
        {
            id: 4,
            src: img4,
            liveSiteCode: 'https://vocal-pixie-e1fb4d.netlify.app/',
            code: 'https://github.com/Tasnin-Jahan/assignment',
        },
    ]
    return (
        <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8 ml-4'>
                    <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Portfolio</p>
                    <p className='py-6'>Check out some of my works right here </p>
                </div>
                <div data-aos="fade-up"
                    data-aos-duration="3000" className='grid sm:grid-cols-1 md:grid-cols-2 gap-8 px-12 sm:px-8 ml-[-15px]'>
                    {
                        portfolios.map(({ id, src, liveSiteCode, code }) => (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <img src={src} alt=""
                                    className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <a href={liveSiteCode} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'
                                        target="_blank"
                                        rel='noreferrer'>Demo</a>
                                    <a href={code} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 sm:mr-[-90px] md:mr-[-90px] lg:mr-[-90px] xl:mr-[-90px]'
                                        target="_blank"
                                        rel='noreferrer'>Code</a>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Portfolio;