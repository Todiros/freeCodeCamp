function findLongestWord(str) {
    let sentence = str.split(' ');
    let lettersCount = 0;
    
    sentence.forEach((word) => {
        if (word.length > lettersCount) {
            lettersCount = word.length;
        }
    });
    
    return lettersCount;
}
  
findLongestWord('The quick brown fox jumped over the lazy dog');
  