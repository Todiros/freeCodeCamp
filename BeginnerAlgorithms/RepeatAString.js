function repeatStringNumTimes(str, num) {
    let resultStr = '';
    
    if  (num > 0) {
        for (let i = num; i > 0; i--) {
            resultStr += str;
        }
    }
    
    return resultStr;
}
  
repeatStringNumTimes('abc', 3);
  