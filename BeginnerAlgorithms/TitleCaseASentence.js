function titleCase(str) {
    let strArr = str.toLowerCase().split(' ');
    
    strArr.forEach((word, i, arr) => {
        let wordArr = word.split('');
      
        wordArr[0] = word[0].toUpperCase();
      
        arr[i] = wordArr.join('');
    });
    
    str = strArr.join(' ');
    
    return str;
}
  
titleCase('I\'m a little tea pot');
  