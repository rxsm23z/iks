const count11 = str => {
  if (str.length < 2) return 0;

  if (str.substr(0,2) === '11'){
    return 1 + count11(str.substr(2));
  } else {
    return count11(str.substr(1));
  }
}

console.log(count11('11abc11'));
