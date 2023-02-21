import React from "react";
import './Donate.css';
import maxlogo from '../Gallery/Images/maxlogo.jpg';
import navylogo from '../Gallery/Images/navylogo.jpg';

function Donate () {
    return (
        <div className="donateCont">
            <img src={maxlogo} />
            <p>
                
                To donate to Max's Musicians Charitable Fund <a href='https://4agc.com/donation_pages/1569a034-e0b4-4f33-9898-7bfedcf56403' target="_blank" rel="noreferrer">click here</a>.
            </p>
            <img src={navylogo} />
            <p>
                
                To make a donation to the Navy-Marine Corps Relief Society <a href="https://support.nmcrs.org/a/homepage" target="_blank" rel="noreferrer">click here</a>.
            </p>
        </div>
    )
}

export default Donate;