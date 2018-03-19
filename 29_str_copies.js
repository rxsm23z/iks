const strCopies = (str, sub, count) => {

  const permute = str => {
    if (str.length < sub.length) return 0;

    if (str.substr(0, sub.length) === sub){
      return 1 + permute(str.substr(sub.length), sub);
    } else {
      return permute(str.substr(1), sub);
    }
  }
  return permute(str) >= count;
}

console.log(strCopies('catcowcat', 'cow', 2));
