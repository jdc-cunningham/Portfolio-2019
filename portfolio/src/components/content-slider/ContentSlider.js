import React, { useState, useEffect } from 'react';
import './ContentSlider.scss';
import USERPROJECTS from './../../assets/demo-data/userProjects'; // will be replaced by API
import iconArrowLeft from './../../assets/icons/arrow-left.svg';
import iconArrowRight from './../../assets/icons/arrow-right.svg';

const photoSlider = React.createRef();


const getProjectTileCount = () => {
  const windowWidth = window.innerWidth;
  let sliderWidth = 0;

  if ( windowWidth > 1280 ) {
    sliderWidth = windowWidth * 0.7;
  } else if ( windowWidth > 768 && windowWidth < 1280 ) {
    sliderWidth = windowWidth * 0.6;
  } else {
    sliderWidth = windowWidth; // granted all resolutions have 4 * 16px padding
  }

  return Math.floor(sliderWidth / 130) - 1;
}


const getActiveProjectObj = ( initUserProjects, reqProjectId ) => {
  const initProjects = {
          activeProjectId: reqProjectId,
          activeSliderIndex: 0,
          renderProjectBtns: getProjectTileCount(),
          userProjects: initUserProjects,
          active: reqProjectId in initUserProjects ? initUserProjects[reqProjectId] : {}
        };
  return initProjects;
}

const handleResize = ( projects, setProject ) => {
  const newTileCount = getProjectTileCount();

  if ( newTileCount !== projects.renderProjectBtns ) {
    let stateCopy = getActiveProjectObj( projects.userProjects, projects.activeProjectId );
    stateCopy.renderProjectBtns = newTileCount;
    setProject( stateCopy );
  }
}

const ContentSlider = () => {
  const localStorageProjectId = localStorage.getItem( 'projectId' ), // this is a hack
        initUserProjects = USERPROJECTS,
        initProjectId = localStorageProjectId ? localStorageProjectId : Object.keys( initUserProjects )[0],
        initProjects = getActiveProjectObj( initUserProjects, initProjectId ),
        [projects, setProject] = useState( initProjects );
  
  useEffect( () => {
    window.addEventListener( 'resize', () => { handleResize(projects, setProject) } );
  }, []);

  // this is ugly
  const activeProjectSliderImage = typeof projects.active.photos[projects.activeSliderIndex] !== undefined ?
          projects.active.photos[projects.activeSliderIndex] : '';

  // this is bad, since doesn't stop/break but future AJAX will be limited
  const clickableProjectTiles = Object.keys( projects.userProjects ).map( ( projectKey, projectIndex ) => {
    const projectPhoto = projects.userProjects[projectKey].photos[0].length ? projects.userProjects[projectKey].photos[0] : '',
          curProjectKey = projectKey;
          
    if ( projectIndex + 1 > projects.renderProjectBtns ) {
      return '';
    }

    return (
      <button
        key={ projectKey } 
        type="button"
        className={ projectKey === projects.activeProjectId ? 'project-slider__project-tile active' : 'project-slider__project-tile' }
        style={{ backgroundImage: "url('/demo-images/" + projectPhoto }}
        onClick={ 
          () => {
            localStorage.setItem( 'projectId', curProjectKey );
            setProject( getActiveProjectObj(initUserProjects, curProjectKey) );
        }}>
        <span>View Project</span>
      </button>
    )
  });

  const getNextPhotoSrc = ( direction ) => {
    const photos = projects.active.photos,
          activeSliderIndex = projects.activeSliderIndex;
    let newIndex = 0,
        stateCopy = projects;

    if ( photos.length > 2 ) {
      if ( direction === 'left' ) {
        if ( activeSliderIndex > 0 ) {
          newIndex = activeSliderIndex - 1;
        } else {
          newIndex = photos.length - 1;
        }
      } else {
        if ( activeSliderIndex < photos.length - 1 ) {
          newIndex = activeSliderIndex + 1;
        } else {
          newIndex = 0;
        }
      }
    } else {
      newIndex = 0; // same
    }

    stateCopy.activeSliderIndex = newIndex;
    setProject( stateCopy );

    return photos[newIndex];
  }

  const advanceSlider = ( direction ) => {
    const nextPhotoSrc = getNextPhotoSrc( direction );
    photoSlider.current.style.backgroundImage = "url('/demo-images/" + nextPhotoSrc + "')"
  }

  return (
    <div className="ContentSlider">
      <div
        className="ContentSlider__photo-slider"
        style={ {backgroundImage: "url('/demo-images/" + activeProjectSliderImage + "')"} }
        ref={ photoSlider }>
        <div className="photo-slider__banner"></div>
        <button className="photo-slider__arrow left" type="button" onClick={ () => advanceSlider('left') }>
          <img src={ iconArrowLeft } alt="previous slide"/>
        </button>
        <button className="photo-slider__arrow right" type="button" onClick={ () => advanceSlider('right') }>
          <img src={ iconArrowRight } alt="next slide"/>
        </button>
      </div>
      <div className="ContentSlider__project-slider">{ clickableProjectTiles }</div>
      <div className="ContentSlider__project-details">
        <div className="project-details__title-date">
          <h2>{ projects.active.name }</h2>
          <span>
            <h3>Released: { projects.active.dateCompleted }</h3>
            <h4>Company: { projects.active.company }</h4>
          </span>
        </div>
        <div className="project-details__project-info">
          <p>{ projects.active.description }</p>
          <a target="_blank" rel="noopener noreferrer" href={ projects.active.link }>View Project</a>
        </div>
      </div>
    </div>
  )
}

export default ContentSlider;