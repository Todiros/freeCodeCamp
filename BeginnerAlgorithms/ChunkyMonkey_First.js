function chunkArrayInGroups(arr, size) {
    let counter = 0;
    
    let initialArr = [];
    let resultArr = [];
    
    arr.forEach((element) => {
        if (counter == size) {
            counter = 0;
            resultArr.push(initialArr);
            initialArr = [];
        }
      
        initialArr.push(element);
        counter++;
    });
    
    resultArr.push(initialArr);
    return resultArr;
}

chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);