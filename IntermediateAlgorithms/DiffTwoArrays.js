function diffArray(arr1, arr2) {
    var newArr = [];
    
    for (let y = 0; y < arr2.length; y++) {
  
      let arrIndex = arr1.indexOf(arr2[y]);
      if (arrIndex !== -1) {
        arr1[arrIndex] = "";
        arr2[y] = "";
      }
    }
    
    let tempArr1 = arr1.filter(element => element !== "");
    let tempArr2 = arr2.filter(element => element !== "");
    
    newArr = tempArr1.concat(tempArr2);
    
    //console.log(newArr)
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);  