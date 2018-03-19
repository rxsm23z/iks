const nestParams = str => {
  if (str.length <= 2){
    if (str[0] === '(' && str[1] === ')'){
      return true;
    } else {
      return false;
    }
  }

  if (str[0] === "(" && str[str.length-1] === ")"){
    return nestParams(str.substr(1, str.length-2));
  } else {
    return false;
  }
}

console.log(nestParams('(((x))'));
