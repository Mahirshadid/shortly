import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="s__navbar section__padding">
        <div className="s__navbar-links">
            <div className="s__navbar-links_logo">
            <img src={logo} alt='logo'/>
            </div>
            <div className="s__navbar-links_container">
                <p><a href="#features">Features</a></p>
                <p><a href="#pricing">Pricing</a></p>
                <p><a href="#resources">Resources</a></p>
            </div>
        </div>
        <div className='s__navbar-button_container'>
            <button type="button" id='nav-b1'>Login</button>
            <button type="button" id='nav-b2'>Sign Up</button>
        </div>
        <div className="s__navbar-menu">
            {toggleMenu
            ? <RiCloseLine color="#252B42" size={25} onClick={() => setToggleMenu(false)} />
            : <RiMenu3Line color="#252B42" size={25} onClick={() => setToggleMenu(true)} />}
            {toggleMenu && (
            <div className="s__navbar-menu_container scale-up-center">
            <div className="s__navbar-menu_container-links">
                <p><a href="#features">Features</a></p>
                <p><a href="#pricing">Pricing</a></p>
                <p><a href="#resources">Resources</a></p>
            </div>
            <div className='s__navbar-menu_container-buttons'>
                <button type="button" id='nav-b1'>Login</button>
                <button type="button" id='nav-b2'>Sign Up</button>
            </div>
            </div>
            )}
        </div>
        </div>
    );
};

export default Navbar;