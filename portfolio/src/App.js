import React, { Component } from 'react';
import './App.scss';
import ProfileCard from './components/profile-card/ProfileCard';
import ContentSlider from './components/content-slider/ContentSlider';

class App extends Component {
  state = {
    mobileScrolled: false
  }

  handleScroll = this.handleScroll.bind( this );

  handleScroll() {
    let curMobileScrolled = false;
    if ( window.innerWidth < 768 && window.pageYOffset > 0 ) {
      curMobileScrolled = true;
    }
    this.setState({
      mobileScrolled: curMobileScrolled
    });
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll );
  }

  render() {
    return (
      <div className="App">
        <ProfileCard mobileScrolled={ this.state.mobileScrolled } />
        <ContentSlider />
      </div>
    );
  }
}

export default App;
