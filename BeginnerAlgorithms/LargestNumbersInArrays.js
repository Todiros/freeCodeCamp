function largestOfFour(arr) {
    let largestArr = [];
    
    for (let i = 0; i < arr.length; i++) {
        let largestNum = 0;
      
        for (let y = 0; y < arr[i].length; y++) {
            if (largestNum < arr[i][y]) {
                largestNum = arr[i][y];
            }
        }
      
        largestArr.push(largestNum);
    }
    
    return largestArr;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  