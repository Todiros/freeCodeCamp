function spinalCase(str) {
    const regex = new RegExp('[a-z]+|[A-Z]|-','g');
    let splittedArr = str.match(regex); 
    
    let newStr = '';
    
    for (let i = 0; i < splittedArr.length; i++) {
        let lastLetter = newStr[newStr.length - 1] || ''; 
      
        if (splittedArr[i] === splittedArr[i].toUpperCase() || lastLetter !== lastLetter.toUpperCase()) {
            newStr += ' ';
        } 
        
        newStr += splittedArr[i];
    }
    
    newStr = newStr.trim().toLowerCase();
    
    return newStr.replace(/\s-+|\s/g, '-');
}
  
spinalCase('thisIsSpinalTap');
  