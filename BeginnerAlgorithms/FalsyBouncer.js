const ifTruthy = (value) => {
    let x = Boolean(value);
    
    if (x) {
        return true;
    }
};
  
function bouncer(arr) {
    let resultArr = [];
    resultArr = arr.filter(ifTruthy);
    
    return resultArr;
}
  
bouncer([7, 'ate', '', false, 9]);
  