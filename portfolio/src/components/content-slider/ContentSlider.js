import React, { useState } from 'react';
import './ContentSlider.scss';
import USERPROJECTS from './../../assets/demo-data/userProjects'; // will be replaced by API

const ContentSlider = () => {
  const imagePrefix = 'http://192.168.1.105:3000/src/assets/demo-data/project-images/',
        initProjects = {
          activeProjectId: 'du3dk',
          userProjects: USERPROJECTS
        },
        [projects, setProject] = useState( initProjects );

  // this is ugly
  const activeProjectSliderImage = typeof projects.userProjects[projects.activeProjectId]['photos'][0] !== undefined ?
          projects.userProjects[projects.activeProjectId]['photos'][0] : '';

  console.log( activeProjectSliderImage );

  return (
    <div className="ContentSlider">
      <div className="ContentSlider__photo-slider" style={ {backgroundImage: "url('/demo-images/" + activeProjectSliderImage + "')"} }>
        <div className="photo-slider__banner"></div>
      </div>
      <div className="ContentSlider__project-slider"></div>
      <div className="ContentSlider__project-details"></div>
    </div>
  )
}

export default ContentSlider;