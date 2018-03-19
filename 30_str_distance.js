const strDistance = (str, sub) => {
  let startSub = str.substr(0, sub.length),
      endSub = str.substr(-sub.length);

  if (startSub === sub && endSub === sub){
    return str.length;
  }

  return strDistance(str.substr(1, str.length-2), sub);
}

console.log(strDistance('cccatcowcatxx', 'cat'));
