function decode(charCode) {
    let shiftedCharCode = charCode - 13;
    let diff = 0;
    
    if (shiftedCharCode < 65) {
        diff = 65 - shiftedCharCode;
        shiftedCharCode = 90 - diff + 1; 
    } else if (shiftedCharCode > 90) {
        diff = shiftedCharCode - 90;
        shiftedCharCode = 65 + diff;
    }
    
    return String.fromCharCode(shiftedCharCode);
}
  
function rot13(str) {
    let strArr = str.split('');
    
    for (let i = 0; i < strArr.length; i++) {
        let symbol = strArr[i];
        let isLetter = /[A-Z]/.test(symbol);
      
        if (isLetter) {
            let charCode = symbol.charCodeAt(0);
            let decodedLetter = decode(charCode);
            strArr[i] = decodedLetter;
        }
    }
    
    str = strArr.join('');
    return str;
}

rot13('SERR PBQR PNZC');
  