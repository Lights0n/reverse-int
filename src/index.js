module.exports = function reverse(n) {
  // console.log(n.toString().reverse);
  n = n.toString().split('').reverse().join('');
  if (n.endsWith('-')) {
    return n.slice(0, n.length - 1)
  } else {
    return n
  }git 
}
// console.log(module.exports(-291));
// console.log(module.exports(252));
// console.log(module.exports(835));