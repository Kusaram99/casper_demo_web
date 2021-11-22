import React, { useState} from 'react';
import './Navbar.css';
import { ImageDATA } from '../Images/ImageDATA';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [navSlide, setNavSlide] = useState({ top: '0px' });

    document.body.onscroll = () => {
        scrollFunction();
        console.log("scroll")
    }

    function scrollFunction() {
        // console.log("Scroll: ", document.body.scrollHeight)
        if (document.body.scrollTop > 1100|| document.documentElement.scrollTop > 1100) {
            setNavSlide({ top: '-103px' });
        } else {
            setNavSlide({ top: '0px' });
        }
    }



    return (
        <nav className="nav_container" >
            <div className='inner-container' style={navSlide}>
                <div className="img-div">
                    <Link to="/"><img src={ImageDATA.main_Logo} alt="logo" /></Link>
                </div>
                <ul className="nav_list">
                    <li><Link to="./">Home</Link></li>
                    <li><Link to="./connect">Connect Wallete</Link></li>
                    <li><Link to="./project">Projects</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;
