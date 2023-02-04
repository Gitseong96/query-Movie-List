const latData = () => Math.random();
const lat = () => Math.floor(Math.random() * (38 - 33 + 1) + 33);
const lng = () => Math.floor(Math.random() * (130 - 125 + 1) + 125);
const pointRandom = (value: number, exp: number) => {
   exp = Number(exp);
   value = Number(value);
   if (exp % 1 !== 0 || Number.isNaN(value)) {
      return NaN;
   } else if (exp === 0) {
      return Math.round(value);
   }
   const magnitude = value.toString().split('e');
   const adjustedValue = Math.round(Number(`${magnitude}e${0 - exp}`));
   // Shift back
   const [newMagnitude, newExponent = 0] = adjustedValue.toString().split('e');
   return Number(`${newMagnitude}e${+newExponent + exp}`);
};
const pointData = () => Math.random();
const latValidation = () => {
   let latData = lat();
   let Randompoint = pointData();
   let data = pointRandom(Randompoint, -6);
   let result = latData + data;
   if (!(result > 33.16955 && result < 38.599814)) {
      latValidation();
   } else {
      return result;
   }
};
const lngValidation = () => {
   let latData = lng();
   let Randompoint = pointData();
   let data = pointRandom(Randompoint, -6);
   let result = latData + data;
   if (!(result > 125.20276 && result < 130.939545)) {
      latValidation();
   } else {
      return result;
   }
};

export { latValidation, lngValidation };
