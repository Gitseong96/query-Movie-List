// (function () {
//    /**
//     * 십진수 조절
//     *
//     * @param {String}  type  조정 타입.
//     * @param {Number}  value 숫자.
//     * @param {Integer} exp   지수 (10 로그의 조정값).
//     * @returns {Number} 조정값
//     */
//    function decimalAdjust(type, value, exp) {
//       // exp가 undefined 또는 0인 경우...
//       if (typeof exp === 'undefined' || +exp === 0) {
//          return Math[type](value);
//       }
//       value = +value;
//       exp = +exp;
//       // 값이 숫자가 아니거나 정수형이 아닌 경우...
//       if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
//          return NaN;
//       }
//       // Shift
//       value = value.toString().split('e');
//       value = Math[type](+(value[0] + 'e' + (value[1] ? +value[1] - exp : -exp)));
//       // Shift back
//       value = value.toString().split('e');
//       return +(value[0] + 'e' + (value[1] ? +value[1] + exp : exp));
//    }

//    // 십진수 round
//    if (!Math.round10) {
//       Math.round10 = function (value, exp) {
//          return decimalAdjust('round', value, exp);
//       };
//    }
//    // 십진수 floor
//    if (!Math.floor10) {
//       Math.floor10 = function (value, exp) {
//          return decimalAdjust('floor', value, exp);
//       };
//    }
//    // 십진수 ceil
//    if (!Math.ceil10) {
//       Math.ceil10 = function (value, exp) {
//          return decimalAdjust('ceil', value, exp);
//       };
//    }
// })();
