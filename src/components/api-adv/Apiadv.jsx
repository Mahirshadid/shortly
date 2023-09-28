import React, { useEffect } from 'react';
import { useState } from 'react';

import br from '../../assets/icon-brand-recognition.svg';
import dr from '../../assets/icon-detailed-records.svg';
import fc from '../../assets/icon-fully-customizable.svg';
import './apiadv.css';

// https://api.shrtco.de/v2/shorten?url=

const getLocal = () => {
    let shortLinks = localStorage.getItem('shortLinks');
    
        if (shortLinks) {
        return JSON.parse(localStorage.getItem('shortLinks'));
        } else {
        return [];
        }
    };
    
    const Apiadv = () => {
        const [text, setText] = useState('');
        const [shortLinks, setShortLinks] = useState(getLocal());
        const [error, setError] = useState('');
    
        const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (text.trim() === '') {
            setError('Empty');
            return;
        }
    
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`);
        const data = await res.json();
    
        if (data.ok) {
            setError('');
            const newShortLinks = [data.result.full_short_link, ...shortLinks.slice(0, 4)];
            setShortLinks(newShortLinks);
            setText('');
        } else {
            setError('Invalid URL');
        }
        };
    
        const handleCopy = (link) => {
        navigator.clipboard.writeText(link);
        };
    
        const handleClearAll = () => {
            setShortLinks([]);
        };

        useEffect(() => {
        localStorage.setItem('shortLinks', JSON.stringify(shortLinks));
        }, [shortLinks]);
    
        return (
        <div className="apiadv section__padding">
            <div className="apiadv-api">
            <form className="form" onSubmit={handleSubmit}>
                <input
                type="text"
                placeholder="Shorten a link here..."
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
                <button type="submit" id="apiadv-b">
                Shorten It!
                </button>
            </form>
            {error && <div className="error">{error}</div>}
            <div className="form_api_bar">
                {shortLinks.map((link, index) => (
                <div key={index} className="form_api_bar_item">
                    <button className="link_btn">{link}</button>
                    <button className="copy_btn" onClick={() => handleCopy(link)}>Copy</button>
                </div>
                ))}
                {shortLinks.length > 0 && ( // Conditionally render the "Clear All" button
                <button className="clear_btn" onClick={handleClearAll}>
                Clear All
                </button>
            )}
            </div>
        </div>


            <div className='apiadv-text'>
                <h2>Advanced Statistics</h2>
                <h3>Track how your links are performing across the web with our
                    advanced statistics dashboard.</h3>
            </div>

            <div className='apiadv-card'>
                
                <div className='card1'>
                <div className='card-img'><img src={br} alt=''/></div>
                    <h2>Brand Recognition</h2>
                    <h3>Boost your brand recognition with each click. Generic links don't mean a thing. 
                        Branded links help instil confidence in your content.</h3>
                </div>

                <div className='card-con' id='con1'></div>
                
                <div className='card2'>
                <div className='card-img'><img src={dr} alt=''/></div>
                    <h2>Detailed Records</h2>
                    <h3>Gain insights into who is clicking your links. Knowing when and where people engage with 
                        your content helps inform better decisions.</h3>
                </div>

                <div className='card-con' id='con2'></div>
                
                <div className='card3'>
                <div className='card-img'><img src={fc} alt=''/></div>
                    <h2>Fully Customizable</h2>
                    <h3>Improve brand awareness and content discoverability through customizable links, 
                        supercharging audience engagement.</h3>
                </div>
            </div>
        </div>
    );
};

export default Apiadv;