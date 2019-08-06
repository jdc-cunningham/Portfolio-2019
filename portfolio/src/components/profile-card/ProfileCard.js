import React from 'react';
import './ProfileCard.scss';
import USERDATA from './../../assets/demo-data/userData';
import profileImg from './../../assets/person/profile.jpg';

const ProfileCard = () => {
  const state = {
    person: {
      profileImgAlt: USERDATA.profileImgAlt,
      name: USERDATA.name,
      title: USERDATA.title,
      skillSet: USERDATA.skillSet, // expects object of arrays
      contact: USERDATA.contact // expects array of strings
    }
  }

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
    }
  });

  const personContactList = state.person.contact,
        personContactListHTML = Object.keys( personContactList ).map( (contactKey, index) => {
    let contactStr = personContactList[ contactKey];
    if ( contactStr.length ) {
      if ( contactKey === 'email' ) {
        return (
          <span><label>email: </label><a href={ "mailto:" + contactStr }>{ contactStr }</a></span>
        )
      } else {
        return (
          <span><label>{ contactKey }:</label> <a href={ contactStr }>{ contactStr }</a></span>
        )
      }
    }
  });
  
  return (
    <div className="ProfileCard">
      <img className="ProfileCard__profile-img" src={ profileImg } alt={ state.person.profileImgAlt } />
      <h1 className="ProfileCard__person-name">{ state.person.name }</h1>
      <h2 className="ProfileCard__person-title">{ state.person.title }</h2>
      <ul className="ProfileCard__skill-list">
        <h3>Skills</h3>
        { personSkillSetHTML }
      </ul>
      <div className="ProfileCard__contact-list">
        <h3>Contact</h3>
        { personContactListHTML }
      </div>
    </div>
  )
}

export default ProfileCard;