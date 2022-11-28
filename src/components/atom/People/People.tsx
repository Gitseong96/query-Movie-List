/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/function-component-definition */
import React from 'react';
import style from './People.module.css';

interface PeopleProps {
   peopleNm: string;
   repRoleNm: string;
   filmoNames: string;
}
const People: React.FC<PeopleProps> = props => {
   return (
      <div className={style.container}>
         <div className={style.text}>{props.peopleNm}</div>
         <div className={style.text}>{props.repRoleNm}</div>
         <div className={style.text}>{props.filmoNames}</div>
      </div>
   );
};

export default People;
