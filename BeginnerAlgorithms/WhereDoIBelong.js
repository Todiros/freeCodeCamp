function getIndexToIns(arr, num) {
    let index = 0;
    let sortedArr = arr.sort((num1, num2) => {
        if (num1 > num2) {
            return 1;
        }
    });
    
    for (let i = 0; i < sortedArr.length; i++) {
        if (sortedArr[i] >= num) {
            index = i;
            break; 
        } else {
            index = sortedArr.length;
        }
    }
    
    return index;
}

getIndexToIns([40, 60], 50);
  