/* eslint-disable react/destructuring-assignment */
import React from 'react';

interface MakerProps {
   companyNm: string;
   ceoNum: string;
   filmNames: string;
}

const Maker: React.FC<MakerProps> = props => {
   return (
      <div>
         <div>{props.companyNm}</div>
         <div>{props.ceoNum}</div>
         <div>{props.filmNames}</div>
      </div>
   );
};

export default Maker;
