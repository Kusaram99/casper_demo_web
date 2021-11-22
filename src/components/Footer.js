import React from 'react';
import { ImageDATA } from '../Images/ImageDATA';

const Footer = () => {
    return (
        <footer>
            <div className="footer_logo_bar">
                <div>
                    <a href="/home"><img src={ImageDATA.main_Logo} alt="footerLogo" /></a>
                    <div className="footer_sit_link">
                        <p><a href="/casper.com">info@casper-pad.com</a></p>
                        <small><a href="/casper.com">© 2021 CasperPad</a></small>
                    </div>
                </div>
                <ul>
                    <li><a href="./contact">Home</a></li>
                    <li><a href="./contact">Connect Wollet</a></li>
                    <li><a href="./contact">Projects</a></li>
                </ul>
            </div>
            <div className="footer_contact_bar">
                <p>
                    Join our social channels to stay up to date with<br/> our developments, and directly chat with the team!
                </p>
                <div className="footer_icons">
                   <a href="telegram"> <i className="fab fa-telegram-plane"></i></a>
                   <a href="twitter"> <i className="fab fa-twitter"></i></a>
                </div>
            </div>
        </footer >
    )
}

export default Footer

