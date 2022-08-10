import React from 'react';
import Buttons from '../utils/Buttons';
import './Heros.css'
function HeroSection() {
  return(
    <div className='hero-section-wrapper'>
        <div className="flex absolute-center flex-col hero-claim-label">
        <div className="">pay credit card bill. earn guaranteed ₹200 back.</div>
        <div className="claim-anchor">claim now <img className='claim-arrow' src='https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png' /> </div>
        </div>
        <div className="flex absolute-center flex-col hero-section max-width">
            <div className='hero-heading'>rewards for paying credit card bills.</div>
            <div className='hero-subheading'>
            join 7.5M+ members who win rewards and cashbacks everyday
            </div>
            <Buttons buttonsText={"Dawnload CRED"} />
        </div>
    </div>
  );
}

export default HeroSection;
