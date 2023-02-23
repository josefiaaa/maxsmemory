import React from "react";
import './Donate.css';
import maxlogo from '../Gallery/Images/maxlogo.jpg';
import navylogo from '../Gallery/Images/navylogo.jpg';

function Donate () {
    return (
        <div className="donateCont">
            <div className="max-donate">
                <div className="donate-pic" >
                    <img src={maxlogo} />   
                </div>
                <div className="donate-words" >
                    <p>
                        As Max was developing his musical skill, he wanted to invest in better equipment to reflect his talent. He worked hard to save up money for a pearl coated Fender Stratocaster, a beautiful guitar to complement his remarkable music. Max's family has established this foundation is his name to spread the love and joy Max felt while playing and composing music. By contributing, you will support young aspiring musicians with improved equipment, scholarships and or educational grants who may not have the opportunity that Max did.
                    </p>
                    <a href='https://4agc.com/donation_pages/1569a034-e0b4-4f33-9898-7bfedcf56403' target="_blank" rel="noreferrer"><button className="donate-btn">Donate Now</button></a>
                </div>
            </div>

            <div className="corps-donate" >
                <div className="donate-pic navy ">
                    <img src={navylogo} />
                </div>
                <div className="donate-words">
                    <p>            
                        While Max was already a hard working and commited individual, he craved more dicipline and structure like many others who protect our country. Your donation to the Navy-Marine Corps Relief Society will help to provide financial assistance to Sailors, Marines and their families in times of need.    
                    </p>
                        <a href="https://support.nmcrs.org/a/homepage" target="_blank" rel="noreferrer"> <button className="donate-btn">Donate Now</button></a>
                </div>
            </div>
        </div>
    )
}

export default Donate;