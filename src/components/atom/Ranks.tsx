import React from 'react';
import styles from './Ranks.module.css';

interface CardPros {
   rank?: string;
   rankInten: string;
   openDt: string;
   audiAcc: string;
   movieNm: string;
}
// eslint-disable-next-line react/function-component-definition
const Ranks: React.FC<CardPros> = props => {
   return (
      <div className={styles.container}>
         <div className={styles.text}> {props.rank}</div>
         <div className={styles.text}>{props.movieNm}</div>
         <div className={styles.text}>누적관객수:{props.audiAcc}</div>
         <div className={styles.text}>개봉일:{props.openDt}</div>
         {Number(props.rankInten) === 0 ? (
            <div className={styles.text}> {props.rankInten}</div>
         ) : Number(props.rankInten) < 0 ? (
            <div className={styles.text}>▼ {props.rankInten}</div>
         ) : (
            <div className={styles.text}>▲{props.rankInten}</div>
         )}
      </div>
   );
};

export default Ranks;

// "▲" : "▼"
