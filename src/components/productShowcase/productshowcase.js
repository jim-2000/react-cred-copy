import React, { useEffect, useRef, useState } from 'react';
import './productshowcase.css';


/**
 * 
 * learn about intersection observer
 * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API 
 * 
 *  */

function ProductShowcase() {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null)
  const toggleAnimation= (e)=> {
    console.log(e);
    if (e[0].isIntersecting) {
      setShowAnimation(true)
    }
   
  };
//

const option ={
  root:null,
  rootMargin:'0px',
  threshold:0.5,
}
  //
useEffect(() => {
  const observer = new IntersectionObserver(toggleAnimation,option)
   if (!showAnimation) {
     if (ref.current) {
       observer.observe(ref.current);
     }
   }
   return ()=>{
    if (ref.current) {
      observer.observe(ref.current);
    }
   }
}, []);

//
  return <div className={`product-showcase ${showAnimation ? "scale-in-bottom" : ''}`} ref={ref}>
    {
    showAnimation && (
      <div className='showcase-wrapper'>
          <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png' className='showcase-ui showcase-mockup-1' /> 
          <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png' className='showcase-ui showcase-mockup-2' />
          <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png' className='showcase-ui showcase-mockup-3' />
          <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png' className='showcase-ui showcase-mockup-4' />
          <img src='https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png' className='showcase-ui showcase-mockup-5' />
      </div>
    )
    }
  </div>;
}

export default ProductShowcase;
