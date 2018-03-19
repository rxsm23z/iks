const strCount = (str, sub) => {
  if (str.length < sub.length) return 0;

  if (str.substr(0, sub.length) === sub){
    return 1 + strCount(str.substr(sub.length), sub);
  } else {
    return strCount(str.substr(1), sub);
  }
}

console.log(strCount('catcowcat', 'cat'));
