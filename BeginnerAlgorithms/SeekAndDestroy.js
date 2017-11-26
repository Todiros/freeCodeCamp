function destroyer(arr) {
    let args = Array.from(arguments).slice(1);
    
    let resultArr = arr.filter((value) => {
        return !args.includes(value);
    });
    
    return resultArr;
}
  
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
  