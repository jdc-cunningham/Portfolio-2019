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
      skillSet: USERDATA.skillSet,
      contact: USERDATA.contact
    }
  }

  const personSkillSet = Object.keys( state.person.skillSet ).map( (skill, index ) => {
    console.log( skill );
  });

  const personContactList = Object.keys( state.person.contact ).map( (contact, index) => {
    console.log( contact );
  });
  
  return (
    <div className="ProfileCard">
      <img className="ProfileCard__profile-img" src={ profileImg } alt={ state.person.profileImgAlt } />
      <h1 className="ProfileCard__person-name">{ state.person.name }</h1>
      <h2 className="ProfileCard__person-title">{ state.person.title }</h2>
      { personSkillSet }
      { personContactList }
    </div>
  )
}

export default ProfileCard;