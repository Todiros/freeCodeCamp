function palindrome(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    
    let leftSide = str.substr(0, Math.ceil(str.length / 2));
    let rightSide = str.substr(str.length / 2, str.length - 1);
    
    rightSide = rightSide.split('').reverse().join('');
    
    if (leftSide == rightSide) {
        return true;
    }
    
    return false;
}
  
palindrome('eye');