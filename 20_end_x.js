const endX = str => {
  if (!str.length) return str;

  if (str[0] === 'x') {
    return endX(str.substr(1)) + 'x';
  } else {
    return str[0] + endX(str.substr(1));
  }
}

// const endX = str => {
//   return recurseEndX("", str);
// }
//
// const recurseEndX = (accumulator, remaining) => {
//   if (!remaining.length){
//     return validAnswer(accumulator);
//   }
//
//   for (let i = 0; i < remaining.length; i++){
//     let next = accumulator + remaining[i],
//         newRemaining = remaining.substr(0, i)
//                     + remaining.substr(i + 1);
//     if (recurseEndX(next, newRemaining)) return true;
//   }
//   return false;
// }
//
// const validAnswer = accumulator => {
//   if (!accumulator.length) return false;
//
//   let firstX = accumulator.indexOf('x');
//
//   for (let i = firstX; i < accumulator.length; i++){
//     if (accumulator[i] !== 'x'){
//       return false;
//     }
//   }
//   return true;
// }
//
// // console.log(validAnswer(''));
//
console.log(endX('xzzzzxzzzz'));
