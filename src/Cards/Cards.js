import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FaQuoteLeft } from 'react-icons/fa';
import './Cards.css';

const Cards = ( ) => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    },[]);

    return (
        <div className='card-background' >

            <div data-aos='fade-in' className='group 1'>
                <p className='card'>
                <i><FaQuoteLeft className='quote' /> We were on the Lincoln deployment together. It was a pleasure to meet such 
                    a kind and fun person. It is so sad to see him leave this earth so soon. He could make any bad situation better."</i> <br /> - P M (Friend)
                </p>

                <p className='card'>
                    <i><FaQuoteLeft className='quote' /> He was especially proud to be part of the AO team and the camaraderie that he had with his buddies. 
                    I was blessed to be able to watch Max grow from a teenager, to a fine young man. Maxwell, your presence will 
                    be greatly missed. You will forever live in our hearts and our minds. We love you"</i> <br /> - Reuben Byrd (Family)
                </p>
            </div>

            <div data-aos='fade-in' className='group 2'>
                <p className='card'>
                    <i><FaQuoteLeft className='quote' /> ...it's been fun following his growing up many miles away. He grew into quite nice young man with lots of 
                    talent and abilities."</i> <br /> - Jacque and Harold Meyer (Family)
                </p>

                <p className='card'>
                    <i><FaQuoteLeft className='quote' /> Whenever we spoke it was always about music. I was lucky to spend some time with Max on a long road trip. 
                    Just us, the road, and some tunes. Sharing our musical influences, and how they impacted our lives 
                    and were expressed in our musicianship, was special to me. Thank you for being part of my 
                    life, you will be missed Max."</i> <br /> - Albert Seaman (Friend)
                </p>
            </div>

            <div data-aos='fade-in' className='group 3'>
                <p className='card no'>
                    <i><FaQuoteLeft className='quote' /> Max was the type of person who would light up a room instantly. He knew how to put a smile on your face 
                    without even trying and he always put your feelings first before his own. He was the sweetest human I have ever 
                    met. He would visit me at work when he was home before December and he would just light up about how I was doing 
                    and he would use these big fancy words to describe his experience and places he has been while over seas. He was 
                    so driven and so passionate about anything he was set to do. He will be missed so much, and he will 
                    never be forgotten."</i> <br /> - Delaney Cook (Friend)
                </p>
            </div>

        </div>
    )
};

export default Cards;