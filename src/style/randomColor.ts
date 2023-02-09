import { color } from './theme';

const colorFn = (a: string) => {
   switch (a) {
      case 'vr1':
         return color.very_peri_1;
      case 'vr2':
         return color.very_peri_2;
      case 'vr3':
         return color.very_peri_3;
      case 'ug1':
         return color.ultimate_gray_1;
      case 'ug2':
         return color.ultimate_gray_2;
      case 'ug3':
         return color.ultimate_gray_3;
      case 'sd1':
         return color.sand_dollar_1;
      case 'sd2':
         return color.sand_dollar_2;
      case 'sd3':
         return color.sand_dollar_3;
      case 'hs1':
         return color.honey_suckle_1;
      case 'hs2':
         return color.honey_suckle_2;
      case 'hs3':
         return color.honey_suckle_3;
   }
};

export { colorFn };

const data = ['vr1', 'vr2', 'vr1', 'ug1', 'ug2', 'ug3', 'sd1', 'sd2', 'sd3', 'hs1', 'hs2', 'hs3'];
const RandomColorNumber = () => Math.floor(Math.random() * (11 - 0 + 1) + 0);
