/**
 * Petunjuk:
 * Buatlah sebuah function yang menerima satu parameter berupa string, lalu kembalikan string tersebut dalam keadaan terbalik.  
 * Contoh:
 * reverseString('Hello World') // 'dlroW olleH'
 * reverseString('JavaScript') // 'tpircSavaJ'
 */

/**
 * Cara 1: dengan built-in methods
 */
function reverseString(str) {
  // pisahkan string menjadi array, balik urutan array, lalu gabungkan kembali menjadi string
  return str.split('').reverse().join('');
}

/**
 * Cara 2: dengan loop
 */
function reverseStringWithLoop(str) {
  let result = '';

  for (let char of str) {
    // tambahkan karakter saat ini ke awal result
    result = char + result;
  }

  return result;
}