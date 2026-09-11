import '/Navbar.css'; //import the CSS file for styling the Navbar component
//Navbar component for the SNP legal Support website
function Navbar(){
    return(
        <nav>
            <h1>SNP Legal Support</h1>

            {/*Main navigation links */}
            <ul>
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