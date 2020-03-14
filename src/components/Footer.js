import React from 'react';
import {footerData} from './footerData';
import '../assets/style/footer.css';
import logo from '../assets/imgs/logo.png';

const Footer = () => {
    let formattedLinks = footerData.map((data, index) => <li key={index}className="footer-link"><a href={data.link} target="blank"><i className={data.icon}></i></a></li>)
    return (
        <div className="footer-container">
            <div className="footer-left">
                <ul className="footer-left__links">
                    <li className="footer-link"><a href="https://michelezuccawebdeveloper.netlify.com/" target="blank">Michele Zucca</a></li>
                    <li className="footer-link"><a href="https://www.integrify.io/" target="blank">Integrify</a></li>
                    <li><img src={logo} className="logo" alt="integrify pic"/></li>

                </ul>
            </div>
            <div className="footer-right">
                <ul className="footer-right__links">
                    {formattedLinks}
                </ul>
            </div>
            
        </div>
    )
}

export default Footer;
