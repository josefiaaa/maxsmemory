import React, {Component} from 'react';
// import myLogo from './myLogo.png';
import { Link, animateScroll as scroll } from 'react-scroll';
import './NavBar.css';

export default class NavBar extends Component {

    // ANIMATIONS
    scrollToTop = () => {
        scroll.scrollToTop();
    };
    render () {
        return (
            <nav className="nav" id="navbar">
                <div className="nav-content bottom-nav">
                    {/* LOGO */}
                    {/* <img
                        src={myLogo}
                        className="nav-logo"
                        alt="Logo"
                        onClick={this.scrollToTop}
                    /> */}
                    {/* NAV LINKS */}
                        {/* WHEN CHANGING NAV LINKS, BE SURE TO UPDATE SECTIONS IN APP.JS */}
                    <ul className="nav-items">
                        <li className="nav-item">
                        <Link
                            className='nav-link'
                            id="secion1"
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                        >
                            About Max
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                        >
                            Donate
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="section3"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                        >
                            Gallery
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="section4"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                        >
                            Musicians
                        </Link>
                        </li>
                        <li className="nav-item">
                        <Link
                            className='nav-link'
                            activeClass="active"
                            to="section5"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                        >
                            Contributers
                        </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
