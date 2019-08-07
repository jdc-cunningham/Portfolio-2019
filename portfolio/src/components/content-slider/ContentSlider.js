import React, { useState, useEffect } from 'react';
import './ContentSlider.scss';
import USERPROJECTS from './../../assets/demo-data/userProjects'; // will be replaced by API

const getActiveProjectObj = ( initUserProjects, reqProjectId ) => {
  const initProjects = {
          activeProjectId: reqProjectId,
          userProjects: initUserProjects,
          active: reqProjectId in initUserProjects ? initUserProjects[reqProjectId] : {}
        };
  return initProjects;
}

const ContentSlider = () => {
  const localStorageProjectId = localStorage.getItem( 'projectId' ), // this is a hack
        initUserProjects = USERPROJECTS,
        initProjectId = localStorageProjectId ? localStorageProjectId : Object.keys( initUserProjects )[0],
        initProjects = getActiveProjectObj( initUserProjects, initProjectId ),
        [projects, setProject] = useState( initProjects );

  useEffect(() => {
    console.log('ue first');
  }, []);

  useEffect(() => {
    console.log('ue state change');
  }, [projects]);

  // this is ugly
  const activeProjectSliderImage = typeof projects.active.photos[0] !== undefined ?
          projects.active.photos[0] : '';

  const clickableProjectTiles = Object.keys( projects.userProjects ).map( ( projectKey, projectIndex ) => {
    const projectPhoto = projects.userProjects[projectKey].photos[0].length ? projects.userProjects[projectKey].photos[0] : '',
          curProjectKey = projectKey;

    return (
      <button
        key={ projectKey } 
        type="button"
        className={ projectKey === projects.activeProjectId ? 'project-slider__project-tile active' : 'project-slider__project-tile' }
        style={{ backgroundImage: "url('/demo-images/" + projectPhoto }}
        onClick={ 
          ( projectKey ) => {
            localStorage.setItem( 'projectId', curProjectKey );
            setProject( getActiveProjectObj(initUserProjects, curProjectKey) );
        }}>
        <span>View Project</span>
      </button>
    )
  });

  console.log( activeProjectSliderImage );

  return (
    <div className="ContentSlider">
      <div className="ContentSlider__photo-slider" style={ {backgroundImage: "url('/demo-images/" + activeProjectSliderImage + "')"} }>
        <div className="photo-slider__banner"></div>
      </div>
      <div className="ContentSlider__project-slider">{ clickableProjectTiles }</div>
      <div className="ContentSlider__project-details">
        <div className="project-details__title-date">
          <h2>{ projects.active.name }</h2>
          <h3>Date completed: { projects.active.dateCompleted }</h3>
        </div>
        <div className="project-details__project-info">
          <p>{ projects.active.description }</p>
          <a href={ projects.active.link }>View Project</a>
        </div>
      </div>
    </div>
  )
}

export default ContentSlider;