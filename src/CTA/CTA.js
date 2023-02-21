import React from 'react';
import img1 from '../Gallery/Images/img1.jpg';
import img8 from '../Gallery/Images/img8.jpg';
import img10 from '../Gallery/Images/img10.jpg';
import './CTA.css';

function CTA () {
    return (
        <div className='cta-back' >

            <div className='cta-words-cont' >
                <h3 className='cta-words'>
                    In Honor and memory of Max Atkins' passion for music and dedication to the Navy-Marine Corps, you can make a contribution
                    to <a rel="noreferrer" className='w-link' href='https://4agc.com/donation_pages/1569a034-e0b4-4f33-9898-7bfedcf56403' target="_blank"> Max's Musicians Charitable Fund</a> and or the <a className='w-link' rel="noreferrer" href='https://support.nmcrs.org/a/homepage' target="_blank"> 
                    Navy-Marine Corps Relief Society</a>.
                </h3>
            </div>

            <div className='cta-grid-cont'>
                <div className='cta-grid'>                    
                    <img src={img10} className='right-pic' alt='' />
                    <img src={img1} className='right-pic' alt='' />
                    <img src={img8} className='right-pic' alt='' />
                    <img src={img10} className='right-pic' alt='' />
                    <img src={img1} className='right-pic' alt='' />
                    <img src={img8} className='right-pic' alt='' />
                </div>
            </div>

        </div>
    )
};

export default CTA;