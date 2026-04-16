/**
 * Petunjuk:
 * Buatlah sebuah function yang menerima dua parameter berupa string, lalu kembalikan apakah kedua string tersebut adalah anagram dari satu sama lain.  
 * Contoh:
 * isAnagram('listen', 'silent') // true
 * isAnagram('hello', 'world') // false
 */

function isAnagram(str1, str2) {
  // Hilangkan spasi dan ubah ke huruf kecil
  const normalize = str => str.replace(/\s/g, '').toLowerCase();

  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);

  // Sort karakter dalam string
  const sortedStr1 = normalizedStr1.split('').sort().join('');
  const sortedStr2 = normalizedStr2.split('').sort().join('');

  // Bandingkan hasilnya
  return sortedStr1 === sortedStr2;
}

console.log(isAnagram('listen', 'silent')); // true
console.log(isAnagram('hello', 'world')); // false