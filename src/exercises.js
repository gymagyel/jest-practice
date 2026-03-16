
function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function reverse (str) {
  return str.split("").reverse().join("");
}

function sum(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide (a, b ) {
  return a / b;
}

function multiply (a, b) {
  return a * b;
}

function caesarCipher(str, shift) {
  function shiftChar(char){
    const alphabet = "abcdefghijklmnopqrstuvwxyz";

    const isUpper = char ===char.toUpperCase();
    const lower = char.toLowerCase();

    if(!alphabet.includes(lower)) return char;
    let index = alphabet.indexOf(lower);
     let newIndex = (index + shift) % 26;

    let newChar = alphabet[newIndex];

     return isUpper ? newChar.toUpperCase() : newChar;
  }
   return str
    .split("")
    .map(c => shiftChar(c))
    .join("");

}
function analyzeArray (arr){
 
 const min = Math.min( ...arr);
 const max = Math.max(...arr);
 const length = arr.length;
const average = arr.reduce((sum,num) => sum+num,0)/ length;
return {
  average,
  min, 
  max,
  length
};
}

module.exports = { 
  capitalize,
reverse,
sum, 
subtract,
divide,
multiply,
caesarCipher,
analyzeArray
};