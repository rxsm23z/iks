const strClean = str => {
  if (str.length < 2) return str;

  if (str[0] === str[1]){
    return strClean(str.substr(1));
  } else {
    return str[0] + strClean(str.substr(1));
  }
}

console.log(strClean('yyzzza'));
