import React, { useState, useEffect } from 'react';
import './App.scss';
import ProfileCard from './components/profile-card/ProfileCard';
import ContentSlider from './components/content-slider/ContentSlider';

const initState = {
        mobileScrolled: false,
      },
      [state, setState] = useState( initState );


const handleScroll = () => {
  let curMobileScrolled = false;
  if ( window.innerWidth < 768 && window.pageYOffset > 0 ) {
    curMobileScrolled = true;
  }
  setState({
    curMobileScrolled: curMobileScrolled
  });
  console.log( window.pageYOffset );
};

function App() {
  useEffect( () => {
    window.addEventListener('scroll', handleScroll );
  }, []);

  return (
    <div className="App">
      <ProfileCard />
      <ContentSlider />
    </div>
  );
}

export default App;
