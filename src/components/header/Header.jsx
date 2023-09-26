import React from 'react';
import workdeskimg from '../../assets/illustration-working.svg';
import './header.css';

const Header = () => {
    return (
        <div className="header section__padding">
            <div className='header-tb'>
                <h1>More than just shorter links</h1>
                <h3>Build your brand's recognition and get
                    detailed insights on how your links are performing.</h3>
                <button type="button" id='header-b'>Get Started</button>
            </div>
            <div className='header-img'>
                <img src={workdeskimg} alt=''/>
            </div>
        </div>
    );
};

export default Header;