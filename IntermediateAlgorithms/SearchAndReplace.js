function myReplace(str, before, after) {
    // checks if the first letter of the word is uppercase
    if(before[0] === before[0].toUpperCase()) {
        after = after.split('');
        after[0] = after[0].toUpperCase();
        after = after.join('');
    }
    
    str = str.replace(before, after);
    
    return str;
}
  
myReplace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');
  