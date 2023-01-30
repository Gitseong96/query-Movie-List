import React from 'react';

interface PeopleProps {
   peopleNm: string;
   repRoleNm: string;
   filmoNames: string;
}
const People: React.FC<PeopleProps> = props => {
   return (
      <div>
         <div></div>
         <div>{props.repRoleNm}</div>
         <div>{props.filmoNames}</div>
      </div>
   );
};

export default People;
