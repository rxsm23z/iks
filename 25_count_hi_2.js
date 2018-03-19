const countHi2 = str => {
  if (str.length < 2) return 0;

  if (str.substr(0,2) === 'hi'){
    if (str[2] !== 'x'){
      return 1 + countHi2(str.substr(2));
    } else {
      return countHi2(str.substr(1));
    }
  } else {
    return countHi2(str.substr(1));
  }
}

console.log(countHi2('ahibhi'));
