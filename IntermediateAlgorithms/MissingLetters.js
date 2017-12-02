function fearNotLetter(str) {
    
    // gets the start point
    let firstLetterCode = str[0].charCodeAt();
    let missingLetter = '';
    
    // from 'a' - 97 to 'e' - 101 
    for (let i = firstLetterCode + 1; i < firstLetterCode + str.length; i++) {

        // check if the counter matches the code of the letter
        // if not, gets the letter with the mismatched code
        if (i !== str.charCodeAt(i - (firstLetterCode))) {

            // 'd' - 100
            missingLetter = String.fromCharCode(i);
            break;
        } 
    }
    
    return missingLetter || undefined;
}
  
fearNotLetter('abce'); 
  