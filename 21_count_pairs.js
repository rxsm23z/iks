const countPairs = str => {
  if (str.length < 3) return 0;

  if (str[0] === str[2]) {
    return 1 + countPairs(str.substr(1));
  } else {
    return countPairs(str.substr(1));
  }
}

console.log(countPairs('axbx'));
