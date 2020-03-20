// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//   let len = str.length;
//   let arr = "";
//   for (i = 1; i <= len; i++) {
//     arr += str[len - i];
//   }
//   return arr;
// }

// function reverse(str) {
//   let len = str.length;
//   let arr = "";
//   for (let character of str) {
//     arr = character + arr;
//   }
//   return arr;
// }

function reverse(str) {
  return str.split("").reduce((rev, char) => char + rev);
}

module.exports = reverse;
