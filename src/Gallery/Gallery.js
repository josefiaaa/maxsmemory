import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import './Gallery.css';
import img2 from '../Gallery/Images/img2.jpg';
import img3 from '../Gallery/Images/img3.jpg';
import img4 from '../Gallery/Images/img4.jpg';
import img6 from '../Gallery/Images/img6.jpg';
import img9 from '../Gallery/Images/img9.jpg';
import img14 from '../Gallery/Images/img14.jpg';
import img15 from '../Gallery/Images/img15.jpg';
import img16 from '../Gallery/Images/img16.jpg';
import img17 from '../Gallery/Images/img17.jpg';
import img18 from '../Gallery/Images/img18.jpg';
import img20 from '../Gallery/Images/img20.jpg';
import img21 from '../Gallery/Images/img21.jpg';


const Gallery = () => {

    useEffect(() => {
        Aos.init({ duration: 1500 });
    },[]);

    return (
        <div data-aos='fade' className="row">

            <div  className="column">
                <img src={img4} />
                <img src={img3} />
                <img src={img21} />
            </div>

            <div className="column">
                <img src={img16} />
                <img src={img17} />
                <img src={img20} />
            </div>

            <div className="column">
                <img src={img6} />
                <img src={img18} />
                <img src={img14} />
            </div>

            <div className="column">
                <img src={img9} />
                <img src={img2} />
                <img src={img15} />
            </div>
        </div>
    )
}

export default Gallery;