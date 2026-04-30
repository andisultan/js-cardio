function findLongestWord(sentence) {
  // Step 1. split the sentence into an array of words
  const words = sentence.split(' ');
  let longestWord = '';

  // Step 2. iterate through each word in the array
  for( let word of words) {
    // Step 3: check if the current word is longer than the current longest words
    if(word.length > longestWord.length) {
      // Step 4: if true, update the longestWord variable
      longestWord = word;
    }
  }

  return longestWord;
}