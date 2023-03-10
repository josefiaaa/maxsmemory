import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import img7 from '../Gallery/Images/img7.jpg';
import img11 from '../Gallery/Images/img11.jpg';
import img12 from '../Gallery/Images/img12.jpg';
import img13 from '../Gallery/Images/img13.jpg';
import img19 from '../Gallery/Images/img19.jpg';


import './About.css';

const About = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    },[]);

    return (
        <div className='about-cont' id='first'>
            <div className='wrapper'>
                <div className='about'>
                    <div data-aos='fade-down' className='section-1'>
                        <div>
                            <img className='main-pic' src={img11} alt='A photo of Max' />
                        </div>
                        <p className='main-words'>
                            Maxwell C. Atkins was born June 9, 2001 in Walnut Creek, CA. He grew up in Livermore, CA, Rocky River, OH and Jupiter, FL where he graduated from Jupiter Community High School in 2020. Max was a well rounded individual who enjoyed nature, playing and composing music and caring for animals. In 2021, Max found another passion. He joined the navy and became an Aviation Ordnanceman (AO) in charge of aircraft ammunition, packing guns, ammo, missiles and bombs onto F/A 18 E Super Hornet fighter jets and moving, lifting, storing and tracking weapons.
                        </p>
                    </div>

                    <div data-aos='fade-up' className='section-2'>
                        <p>
                            Max was stationed with the Strike Fighter Squadron 14 (VFA-14) “Tophatters” based at Naval Air Station Lemoore in Lemoore, CA, attached to the USS Abraham Lincoln (CVN-72) aircraft carrier based in San Diego, CA. Max was so excited about his new experiences on his first deployment in 2022, which included playing golf in Guam on the mountainous terrain by the ocean, beach-time and chilling with his buddies in Hawaii, and his highlight, exploring Tokyo, Japan and enjoying the vast cityscape at night. Max's commanding officers spoke highly of him for always being on-time, doing an excellent job, helping others learn AO skills, and for being a well-liked, overall great sailor.
                        </p>

                        <div className='award-cont'>
                            <img className='awards' src={img7} alt='Fighting Fourteen Tophatters Award' />
                            <img className='awards' src={img13} alt='DEPT. of The Navy and Marine Corps Achievement Medal' />
                            <img className='awards' src={img12} alt='Medal with anchor' />
                        </div>
                    </div>

                    <div data-aos='fade-up' className='section-3'>
                        <p>
                            Max was very in tune with the naturistic part of himeself too, enjoying hanging out with friends or family at the beach or practicing responsibility caring for animals. He also inherited the music gene and loved to play acoustic and electric guitar. Max could learn anything that he was able to touch and feel which is why music was so special to him. Starting out at a young age, he didn't care for music lessons but in keeping with Max's style and drive, he taught himself to play and went on to compose most of his own music. 
                        </p>
                        <img src={img19} alt='Young Max Playing Guitar' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About; 

