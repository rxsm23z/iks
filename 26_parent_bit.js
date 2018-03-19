const parentBit = str => {
  if (str[0] === '(' && str[str.length-1] === ')'){
    return str;
  }
  if (str[0] === '('){
    return parentBit(str.substr(0, str.length-1));
  } else {
    return parentBit(str.substr(1));
  }
}

console.log(parentBit('(xy)1'));
