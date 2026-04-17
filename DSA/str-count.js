/**
 * Petunjuk:
 * Buatlah sebuah function yang menerima dua parameter berupa string, lalu hitung berapa banyak huruf yang sama dengan parameter kedua yang terdapat pada parameter pertama.  
 * Contoh:
 * strCount('Hello', 'o') // 1
 * strCount('Hello', 'l') // 2
 * strCount('Hello', 'z') // 0
 */

function strCount(str, letter){
  let count = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === letter){
      count++;
    }
  }
  return count;
}