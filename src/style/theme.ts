const size = {
   xs: '400px',
   s: '576px',
   m: '768px',
   l: '992px',
   xl: '1200px',
};

const font = {};
const color = {
   very_peri_1: '#373d7b',
   very_peri_2: '#6667ab',
   very_peri_3: '#9695dd',

   ultimate_gray_1: '#656769',
   ultimate_gray_2: '#939597',
   ultimate_gray_3: '#c3c6c8',

   sand_dollar_1: '#ac9c8e',
   sand_dollar_3: '#decdbe',
   sand_dollar_2: '#fffff1',

   honey_suckle_1: '#a31545',
   honey_suckle_2: '#d94f70',
   honey_suckle_3: '#ff819e',
};
const theme = {
   mobile_S: `screen and (max-width:${size.xs})`,
   mobile_M: `screen and (max-width:${size.s})`,
   medium: `screen and (max-width:${size.m})`,
   large: `screen and (max-width:${size.l})`,
   xlarge: `screen and (max-width:${size.xl})`,
};
export { theme, color };
