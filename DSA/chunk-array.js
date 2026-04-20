/**
 * Petunjuk:
 * Buatlah sebuah function yang menerima dua parameter berupa array dan angka, lalu bagi array tersebut menjadi beberapa sub-array dengan panjang sesuai angka yang diberikan.  
 * Contoh:
 * chunkArray([1, 2, 3, 4, 5], 2) // [[1, 2], [3, 4], [5]]
 * chunkArray([1, 2, 3, 4, 5], 3) // [[1, 2, 3], [4, 5]]
 */

function chunkArray(arr, size) {
  const chunkedArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkedArr.push(arr.slice(i, i + size));
  }
  return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5], 2)); // [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // [[1, 2, 3], [4, 5]]