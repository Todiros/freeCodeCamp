function chunkArrayInGroups(arr, size) {
    let resultArr = [];
    
    while (arr.length > 0) {
        let tempArr = [];
        tempArr = arr.splice(0, size);
      
        resultArr.push(tempArr);
    }
    
    return resultArr;
}
  
chunkArrayInGroups(['a', 'b', 'c', 'd'], 2);