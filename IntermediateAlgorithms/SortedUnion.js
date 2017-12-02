function uniteUnique(arr) {
    let arrays = [...arguments];
    let flatten = arrays.reduce((prevArr, currentArr) => prevArr.concat(currentArr), []);
    
    let distinctArr = [];
    for (let i = 0; i < flatten.length; i++) {

        let notDistinct = false;
        for (let j = i + 1; j >= 0; j--) {
        
            if (flatten[i] === distinctArr[j]) {
                notDistinct = true;
            } 
        } 

        if (!notDistinct)
            distinctArr.push(flatten[i]);
    }
    return distinctArr;
}
  
uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);