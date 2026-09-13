import {useState} from 'react'; //import the useState hook from React   
import '/Navbar.css'; //import the CSS file for styling the Navbar component

//Navbar component for the SNP legal Support website
function Navbar(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return(
        <nav>
            <div className= "nav-header">
            <h1>SNP Legal Support</h1>
            {/*Button used to open and close the mobile navigation */}
            <button
                type = "button"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={isMenuOpen}
                onClick ={() => setIsMenuOpen(!isMenuOpen)}
                >
                {/*Change the button text based on whether the menu is open or closed */}
                {isMenuOpen ? '❌' : '☰'}
            </button>
            </div>
            {/*Main navigation links */}
            <ul className={isMenuOpen ? "nav-menu open" : "nav-menu"}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#services">Team</a></li>
                <li><a href="#services">FAQ</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar; //make the Navbar component available for use in other parts