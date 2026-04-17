/**
 * Petunjuk:
 * Buatlah sebuah function yang menerima satu parameter berupa string, lalu kembalikan karakter yang paling sering muncul dalam string tersebut.  
 * Contoh:
 * maxChar('hello world') // 'l'
 * maxChar('javascript') // 'a'
 */

function maxChar(str) {
  const charCount = {};

  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }

  let maxChar = '';
  let maxCount = 0;

  for (let char in charCount) {
    if (charCount[char] > maxCount) {
      maxChar = char;
      maxCount = charCount[char];
    }
  }

  return maxChar;
}

console.log(maxChar('hello world')); // 'l'
console.log(maxChar('javascript')); // 'a'