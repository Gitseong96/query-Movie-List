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

// people은 페이지네이션 구현
