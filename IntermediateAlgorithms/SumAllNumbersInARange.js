function sumAll(arr) {

    let result = arr.reduce((a, b) => {
        let sum = 0;

        let min = Math.min(a, b);
        let max = Math.max(a, b);
      
        for (let i = min; i <= max; i++) {
            sum += i;
        }

        return sum;
    });
    
    //console.log(result);
    return result;
}
  
sumAll([1, 4]);