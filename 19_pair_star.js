const pairStar = str => {
  if (str.length <= 1) return str;

  if (str[0] === str[1]){
    return `${str[0]}*${pairStar(str.substr(1))}`;
  } else {
    return `${str[0]}${pairStar(str.substr(1))}`;
  }
}

console.log(pairStar('hello'));
