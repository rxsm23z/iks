const allstar = str => {
  if (str.length === 1) return str;

  return `${str[0]}*${allstar(str.substr(1))}`;
}

console.log(allstar("ab"));
