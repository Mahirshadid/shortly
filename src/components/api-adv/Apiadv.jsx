import React from 'react';
import br from '../../assets/icon-brand-recognition.svg';
import dr from '../../assets/icon-detailed-records.svg';
import fc from '../../assets/icon-fully-customizable.svg';
import './apiadv.css';

const Apiadv = () => {
    return (
        <div className="apiadv section__padding">
            <div className='apiadv-api'>
                <textarea id="apiadv-text" placeholder='Shorten a link here...' required />
                <button type="button" id='apiadv-b'>Shorten It!</button>
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