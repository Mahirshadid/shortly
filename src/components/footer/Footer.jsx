import React from 'react';
import logo from '../../assets/logo copy.svg';
import m1 from '../../assets/icon-facebook.svg'
import m2 from '../../assets/icon-instagram.svg'
import m3 from '../../assets/icon-pinterest.svg'
import m4 from '../../assets/icon-twitter.svg'
import './footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-logo'>
                <img src={logo} alt=''/>
            </div>
            <div className='footer-features'>
                <h5 className='footer-text-title'>Features</h5>
                <p>Link Shortening</p>
                <p>Branded Links</p>
                <p>Analytics</p>
            </div>
            <div className='footer-resources'>
                <h5 className='footer-text-title'>Resources</h5>
                <p>Blog</p>
                <p>Developers</p>
                <p>Support</p>
            </div>
            <div className='footer-company'>
                <h5 className='footer-text-title'>Company</h5>
                <p>About</p>
                <p>Our Team</p>
                <p>Careers</p>
                <p>Contact</p>
            </div>
            <div className='footer-media'>
                <img src={m1} alt=''/>
                <img src={m2} alt=''/>
                <img src={m3} alt=''/>
                <img src={m4} alt=''/>
            </div>
        </div>
    );
};

export default Footer;