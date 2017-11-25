/* 
   I, V,  X,  L,  C,   D,   M
   1, 5, 10, 50, 100, 500, 1000 
*/

// Magic
function flatten(arr)  {
    return arr.reduce(function (flat, toFlatten) {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

// breaks down arabic numbers into the core roman numbers - 1, 5, 10, 50, etc.
function checker (min, max, number) {
    const MARGIN = Math.ceil(max * 0.1); 
    let diff = 1 + max - number;
    let currentResult = [];

    if (diff > MARGIN) {
        // TODO: maybe add the arabic numbers into an array and then pass it to arabicToRoman()?
        currentResult.push(arabicToRoman(min));
        number -= min;
        currentResult.push(arabicToRoman(number));
    } else {
        /*
            TODO: If the equations goes to right,
            aka current number is smaller than the right with ~10%
            Hint: reversed adding order!

        */
    }

    return currentResult;
}

// converts the base numbers from arabic to roman
function arabicToRoman(number) {
    let diff = 0; 
    let romanResult = "";
    let currentRomanLetter = '';

    if (number >= 1 && number <= 4) {
        if (number === 1) {
            romanResult = "I";
        } else {
            currentRomanLetter = checker(1, 4, number);
            romanResult = currentRomanLetter;
        }
        
    } else if (number >= 5 && number <= 9) {
        if (number === 5) {
            romanResult = "V";
        } else {
            currentRomanLetter = checker(5, 9, number);
            romanResult = currentRomanLetter;
        }
        
    } else if (number >=10 && number <= 49) {
        if (number === 10) {
            romanResult = "X";
        } else {
            currentRomanLetter = checker(10, 49, number);
            romanResult = currentRomanLetter;
        }
    } else if (number >=50 && number <= 99) {
        if (number === 50) {
            romanResult = "L";
        } else {
            currentRomanLetter = checker(50, 99, number);
            romanResult = currentRomanLetter;
        }
        
    } else if (number >=100 && number <= 499) {
        if (number === 100) {
            romanResult = "C";
        } else {
            currentRomanLetter = checker(100, 499, number);
            romanResult = currentRomanLetter;
        }
        
    } else if (number >=500 && number <= 999) {
        if (number === 500) {
            romanResult = "D";
        } else {
            currentRomanLetter = checker(500, 999, number);
            romanResult = currentRomanLetter;
        }
        
    } else /* 1000 */ {
        romanResult = "M";
    }

    return romanResult;
}

/* splits the input number into ones, tens, hundreds and thousands 
   and passes them one by one to the converter */ 
// formats the output
function convertToRoman(num) {
    let remainder = num;
    let breakDown = [];
    let result = [];

    let counter = 1;
    while (remainder >= 1) {
        let digit = remainder % 10;
        remainder /= 10;

        breakDown.push(Math.trunc(digit) * counter);
        counter *= 10;
    }

    breakDown.forEach((number, i, arr) => {
        result.unshift(arabicToRoman(number));
    });


    result = flatten(result).join('');
    console.log(result);
    return result;
}

convertToRoman(36);