function getFibosOf(n) {
    let fibonacciArr = [1, 1];
    let lastElement = fibonacciArr[fibonacciArr.length - 1];
    let prevElement = fibonacciArr[fibonacciArr.length - 2];
    
    while (lastElement <= n) {
        let newElement = prevElement + lastElement;

        fibonacciArr.push(newElement);
        lastElement = fibonacciArr[fibonacciArr.length - 1];
        prevElement = fibonacciArr[fibonacciArr.length - 2];
    }

    fibonacciArr.pop();

    return fibonacciArr;
}

function checkIfOdd(n) {
    return (n % 2 !== 0) ? n : 0;
}

function sumOddFibos(arr) {
    let sum = 0;
    
    arr.forEach((el) => {
        sum += checkIfOdd(el);
    });
    
    return sum;
}
  
function sumFibs(num) {
    let fibos = getFibosOf(num);
    let oddFiboSum = sumOddFibos(fibos);

    return oddFiboSum;
}

sumFibs(75025);