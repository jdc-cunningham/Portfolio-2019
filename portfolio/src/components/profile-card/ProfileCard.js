import React, { useState } from 'react';
import './ProfileCard.scss';
import USERDATA from './../../assets/demo-data/userData'; // will be replaced by API
import profileImg from './../../assets/person/profile.jpg';

const initState = {
  person: {
    profileImgAlt: USERDATA.profileImgAlt,
    name: USERDATA.name,
    title: USERDATA.title,
    skillSet: USERDATA.skillSet, // expects object of arrays
    contact: USERDATA.contact // expects array of strings
  }
}

const ProfileCard = ( props ) => {
  const [state] = useState( initState );

  const personSkillSet = state.person.skillSet,
        personSkillSetHTML = Object.keys( personSkillSet ).map( (skillKey, skillKeyIndex ) => {
    if ( Array.isArray(personSkillSet[skillKey]) ) {
      return (
        <li key={ skillKeyIndex }>
          <span>{ skillKey }</span>
          <ul>
            {
              personSkillSet[skillKey].map( (skill, skillIndex) => {
                return <li key={ skillIndex }>{ skill }</li>
              })
            }
          </ul>
        </li>
      )
    } else {
      return '';
    }
  });

  let personContactEmailBtn = null;
  const personContactList = state.person.contact,
        personContactListHTML = personContactList.map( (contactObj, index) => {
          
          if ( Object.getOwnPropertyNames(contactObj).length === 0 ) {
            return "";
          } else {
            if ( contactObj.type === 'email' ) {
              return (
                <li key={ index }><a href={ "mailto:" + contactObj.link }>{ contactObj.text }</a></li>
              )
            } else {
              return (
                <li key={ index }><a href={ contactObj.link }>{ contactObj.text }</a></li>
              )
            }
          }
  });
  
  return (
    <div className={ props.mobileScrolled ? "ProfileCard mobile-scrolled" : "ProfileCard" }>
      <div className="ProfileCard__wrapper">
        <img className="ProfileCard__profile-img" src={ profileImg } alt={ state.person.profileImgAlt } />
        <span className="ProfileCard__span">
          <h1 className="ProfileCard__person-name">{ state.person.name }</h1>
          <h2 className="ProfileCard__person-title">{ state.person.title }</h2>
          <div className="ProfileCard__person-mobile-email-btn">{ personContactEmailBtn }</div>
        </span>
      </div>
      <ul className="ProfileCard__skill-list">
        <h3>Skills</h3>
        { personSkillSetHTML }
      </ul>
      <div className="ProfileCard__contact-list">
        <h3>Contact</h3>
        <ul>{ personContactListHTML }</ul>
      </div>
    </div>
  )
}

export default ProfileCard;