import React from 'react';
import './App.scss';
import ProfileCard from './components/profile-card/ProfileCard';
import ContentSlider from './components/content-slider/ContentSlider';

function App() {
  return (
    <div className="App">
      <ProfileCard />
      <ContentSlider />
    </div>
  );
}

export default App;
