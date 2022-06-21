const findLongestWord = function (string) {
  const arr = string.split(" ");
  let theLongestWord = "";
  for (let i = 0; i < arr.length; i++) {
    let str = arr[i];
    if (str.length > theLongestWord.length) {
      theLongestWord = str;
    }
  }
  return theLongestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
