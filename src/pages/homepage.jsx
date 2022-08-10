import React from 'react';
import AppRating from '../components/AppRating/appRating';
import BrandLove from '../components/Brands/brands';
import CredExperience from '../components/credExperience/credExperience';
import Credsecurity from '../components/credSecurity/credsecurity';
import CredStory from '../components/credStory/credStory';
import Feelspiacial from '../components/Feelspecial/feelspiacial';
import HeroSection from '../components/Herosection/HeroSection';
import MobileScroll from '../components/mobileScroll/MobileScroll';
import ProductShowcase from '../components/productShowcase/productshowcase';
import Slider from '../components/slider/Slider';
import Header from '../components/utils/Header';
import WindowPeak from '../components/windowPeak';

function HomePage() {
  return <>
      <Header />
      <HeroSection />
      <ProductShowcase />
      <Feelspiacial />
      <BrandLove />
      <CredExperience />
      <MobileScroll />   
      <div className="non-mobile">
        <WindowPeak />
      </div>
      <Credsecurity />
      <CredStory />
      <AppRating />
      <Slider />
      
  </>;
}

export default HomePage;
