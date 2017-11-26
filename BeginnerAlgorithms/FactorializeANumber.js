function factorialize(num) {
    let result = 1;
    
    for (let i = result; i <= num; i++) {
        result *= i;  
    }
    
    return result;
}
  
factorialize(5); // 120