import NavBar from './NavBar/NavBar';
import Section from './Sections/Sections';
import CTA from './CTA/CTA';
import About from './About/About';
import Cards from './Cards/Cards';
// import Foundations from './Foundations/Foundations';
import Donate from './Donate/Donate';
import Sidebar from './Sidebar/Sidebar';
import Gallery from './Gallery/Gallery';


import './App.css';

function App() {
    return (    
        <div className="App">

            {/* HEADER */}
            <header className="App-header">
                <NavBar />
                <Sidebar />
            </header>

            <CTA />

            <div className='Main'>
                {/* SECTIONS */}
                {/* WHEN EDITING A SECTION, BE SURE TO UPDATE THE CORRESPONDING LINKS IN NAVBAR.JS */}
                {/* SECTION 1 */}
                <Section
                    title="In Memory of Maxwell Atkins"
                    subtitle={<About />}
                    dark={true}
                    id="section1"
                />

                <Cards />

                {/* <Gallery /> */}

                {/* SECTION 2 */}
                <Section 
                    // title="Donate"
                    subtitle={<Donate />}
                    id='section2'
                />

                {/* SECTION 3 */}
                <Section 
                    // title="Gallery"
                    subtitle={<Gallery />}
                    id='section3'
                />

                {/* SECTION 4 */}
                {/* <Section 
                    title="Musicians"
                    // subtitle={<Musicians />}
                    id='section4'
                /> */}

                { /* SECTION 5 */}
                    {/* <Section 
                    title="Contributers"
                    // subtitle={<Contributers />} 
                    id='section5'
                /> */}
            </div>
        </div>
    );
}

export default App;