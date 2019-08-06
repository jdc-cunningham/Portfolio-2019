import React, { useState, useEffect, createContext, useContext, useRef } from 'react';
import './App.scss';
import ProfileCard from './components/profile-card/ProfileCard';
import ContentSlider from './components/content-slider/ContentSlider';

// const mobileStateContext = React.createContext({
//   mobileScrolled: false
// });

const handleScroll = () => {
  let curMobileScrolled = false;
  if ( window.innerWidth < 768 && window.pageYOffset > 0 ) {
    curMobileScrolled = true;
  }

  console.log( window.pageYOffset );
};

function App() {
  const profileCardRef = useRef( null );
  
  useEffect( () => {
    window.addEventListener('scroll', handleScroll );
  }, []);

  return (
    <div className="App">
      <ProfileCard ref={ profileCardRef } />
      <ContentSlider />
    </div>
  );
}

export default App;
