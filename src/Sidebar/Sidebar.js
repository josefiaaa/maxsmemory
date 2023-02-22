import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';
import { MdClose } from 'react-icons/md';
import { FiMenu } from 'react-icons/fi';
import './Sidebar.css';

const Sidebar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const ref = useRef();
    useEffect(() => {
        const handler = (event) => {
            if (
                sidebarOpen &&
                ref.current &&
                !ref.current.contains(event.target)
            ) {
                setSidebarOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            // Cleanup the event listener
            document.removeEventListener('mousedown', handler);
        };
    }, [sidebarOpen]);

    return (
        <nav ref={ref} className="sidebar">
            <button
                className="toggle"
                onClick={() => setSidebarOpen((prev) => !prev)}
            >
                {sidebarOpen ? (
                    <MdClose 
                        style={{ 
                            width: '32px', 
                            height: '32px' 
                        }}
                    />
                ) : (
                    <FiMenu
                        style={{
                            width: '32px',
                            height: '32px',
                            background: 'white',
                            padding: '2px',
                            borderRadius: '5px',
                        }}
                    />
                )}
            </button>
            <div>
                <ul className={`menu-nav${sidebarOpen ? ' show-menu' : ''}`}>
                    <li className="nav-item">
                        <Link
                            onClick={() => setSidebarOpen(false)}
                            className='side-link'
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
                            onClick={() => setSidebarOpen(false)}
                            className='side-link'
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1500}
                        >
                            Foundations
                        </Link>
                    </li>
                        <li className="nav-item">
                        <Link
                            onClick={() => setSidebarOpen(false)}
                            className='side-link'
                            activeClass="active"
                            to="section3"
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
                            onClick={() => setSidebarOpen(false)}
                            className='side-link'
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
                            onClick={() => setSidebarOpen(false)}
                            className='side-link'
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
};
export default Sidebar;
