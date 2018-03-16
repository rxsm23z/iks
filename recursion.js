const factWrapper = n => {
  let memo = {1: 1};

  const fact = n => {
    if (memo[n]){
      return memo[n];
    }
    memo[n] = n * fact(n-1);
    return memo[n];
  }
  fact(n);
  return memo[n];
}

// console.log(factWrapper(100))

const collatz = n => {
  if (n === 1) return 0;

  if ((n % 2) === 0){
    return 1 + collatz(n / 2);
  } else {
    return 1 + collatz((3*n) + 1);
  }
}

// console.log(collatz(3));

const raise = (base, exponent) => {
  if (exponent === 0) return 1;
  return base * raise(base, exponent - 1);
}
/*
raise(2, 3);
2 * raise(2, 2);
    2 * raise(2, 1);
        2 * raise(2, 0);
            1
*/

const raiseHalf = (base, exponent) => {
  if (exponent === 0) return 1;

  let half = raiseHalf(base, Math.floor(exponent/2));

  if (exponent % 2 === 0){
    return half * half
  } else {
    return base * half * half;
  }
}

// console.log(raiseHalf(2,1000));

const palindrome = string => {
  if (string.length <= 1){
    return true;
  }
  return string[0] === string[string.length-1]
         && palindrome(string.substr(1,string.length-2));
}

// console.log(palindrome('11zwowz11 aa 11zwowz11'));

const binarySearch = (array, target) => {
  if (array.length < 1) return false;

  let midPoint = Math.floor(array.length / 2),
      midVal = array[midPoint];

  if (midVal === target){
    return true;
  } else if (midVal < target){
    return binarySearch(array.slice(midPoint + 1), target);
  } else {
    return binarySearch(array.slice(0, midPoint), target);
  }
}

// console.log(binarySearch([1,2,3,4,5,6,7], 10));

const findSubset = (n, k) => {
  if (k === 0 || k === n) return 1;
  return findSubset(n-1, k) + findSubset(n-1, k-1);
}

// console.log(findSubset(60, 4));

const moveTower = n => {
  if (n > 0){
    moveTower(n-1, src, tmp, dst);
    moveSingleDisk(src, dst);
    moveTower(n-1, tmp, dst, src);
  }
}

const findPerms = string => {
  let permutations = [];

  permute("", string, permutations);
  return permutations;
}

const permute = (accumulator, remaining, permutations) => {
  if (!remaining.length) return permutations.push(accumulator);

  for (let i = 0; i < remaining.length; i++){
    let next = accumulator + remaining[i],
        newRemaining = remaining.slice(0, i) + remaining.slice(i+1);

    permute(next, newRemaining, permutations);
  }
}

console.log(findPerms("abc"));
