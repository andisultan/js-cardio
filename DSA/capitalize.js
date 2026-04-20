/**
 * Petunjuk:
 * Buatlah sebuah function yang menerima satu parameter berupa string, lalu kembalikan string tersebut dengan huruf pertama dari setiap kata diubah menjadi huruf kapital.  
 * Contoh:
 * capitalize('hello world') // 'Hello World'
 * capitalize('javaScript is fun') // 'JavaScript Is Fun'
 */

function capitalize(str) {
  // pisahkan string menjadi array kata-kata
  const words = str.split(' ');

  // ubah huruf pertama dari setiap kata menjadi kapital
  const capitalizedWords = words.map(word => {
    if (word.length === 0) return word; // jika kata kosong, kembalikan apa adanya
    return word[0].toUpperCase() + word.slice(1);
  });

  // gabungkan kembali menjadi string
  return capitalizedWords.join(' ');
}

console.log(capitalize('hello world')); // 'Hello World'
console.log(capitalize('javaScript is fun')); // 'JavaScript Is Fun'