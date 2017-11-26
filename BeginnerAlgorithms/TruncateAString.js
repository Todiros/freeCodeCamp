function truncateString(str, num) {
    let resultStr = '';
    
    if (str.length > num) {
        if (num > 3) {
            num -= 3;
        }
        resultStr = str.slice(0, num);
        resultStr += '...';          
    } else {
        resultStr = str.slice(0, num);
    }
    
    return resultStr;
}
  
truncateString('A-tisket a-tasket A green and yellow basket', 11);
  