const countABC = str => {
  if (str.length < 3) return 0;

  let substring = str.substr(0,3)

  if (substring === 'abc' || substring === 'aba'){
    return 1 + countABC(str.substr(1));
  } else {
    return countABC(str.substr(1));
  }
}

console.log(countABC('abaxxaba'));
