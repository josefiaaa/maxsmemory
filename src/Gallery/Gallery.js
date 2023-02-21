import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Gallery.css';
import img1 from '../Gallery/Images/img1.jpg';
import img2 from '../Gallery/Images/img2.jpg';
import img3 from '../Gallery/Images/img3.jpg';
import img4 from '../Gallery/Images/img4.jpg';
import img5 from '../Gallery/Images/img5.jpg';
import img6 from '../Gallery/Images/img6.jpg';
// import img7 from '../Gallery/Images/img7.jpg';
import img8 from '../Gallery/Images/img8.jpg';
import img9 from '../Gallery/Images/img9.jpg';
import img10 from '../Gallery/Images/img10.jpg';

class Gallery extends React.Component {
    render() {
        return (
            <div className="picContainer"> 
                <Carousel className="carousel" centerMode autoPlay interval="5000" transitionTime="2000" infiniteLoop >
                    <div>
                        <img className='carouselPics' src={img1} alt="" />
                        {/* <p className="caption">My Photo 1</p> */}
                    </div>
                    <div>
                        <img className='carouselPics' src={img2} alt="" />
                        <p className="caption">My Photo 2</p>
                    </div>
                    <div>
                        <img className='carouselPics' src={img3} alt="" />
                        <p className="caption">My Photo 3</p>
                    </div>
                    <div>
                        <img className='carouselPics' src={img4} alt="" />
                        <p className="caption">My Photo 4</p>
                    </div>
                    <div>
                        <img className='carouselPics' src={img5} alt="" />
                        <p className="caption">My Photo 5</p>
                    </div>
                    <div>
                        <img className='carouselPics' src={img6} alt="" />
                        <p className="caption">My Photo 6</p>
                    </div>
                    {/* <div>
                        <img className='carouselPics' src={img7} alt="" />
                        <p className="caption">My Photo 7</p>
                    </div> */}
                    <div>
                        <img className='carouselPics' src={img8} alt="" />
                        <p className="caption">My Photo 8</p>
                    </div>
                    <div>
                        <img className='carouselPics' src={img9} alt="" />
                        <p className="caption">My Photo 9</p>
                    </div>
                    <div>
                        <img className='carouselPics' src={img10} alt="" />
                        <p className="caption">My Photo 10</p>
                    </div>
                </Carousel>
            </div>
        )
    };
}
export default Gallery