/**
 * Petunjuk:
 * Buatlah sebuah function yang menerima satu parameter berupa angka, lalu tampilkan pola segitiga seperti berikut:
 * Contoh:
 * loopingTriangle(5)
 * *
 * **
 * ***
 * ****
 * *****
 *
 * loopingTriangle(7)
 * *
 * **
 * ***
 * ****
 * *****
 * ******
 * *******
 */

function loopingTriangle(len) {
  let result = '';

  for (let i = 0; i < len; i++) {
    result += '*';
    console.log(result);
  }
}

loopingTriangle(7);