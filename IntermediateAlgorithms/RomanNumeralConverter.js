'use strict';

/* 
   I, V,  X,  L,  C,   D,   M
   1, 5, 10, 50, 100, 500, 1000 
*/

// Magic
function flatten(arr)  {
    return arr.reduce(function (flat, toFlatten) {
        // checks if the element in the array is another array
        // it calls flatten() recursively if it is, concates the element toFlatten, if it isn't
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}

// breaks down arabic numbers into the core roman numbers - 1, 5, 10, 50, etc.
function checker (min, max, number) {
    // the forumla does not work for the number 40 where the difference is 10, while the margin only 5 so it has to be doubled
    const MARGIN = number === 40 ? (Math.ceil(max * 0.1) * 2) : Math.ceil(max * 0.1); 
    // +1 so the max becomes 10, 50, 100, etc. instead of 9, 49, 99 
    let diff = 1 + max - number;
    let currentResult = [];
    let tempResult = '';

    if (diff > MARGIN) {
        tempResult = arabicToRoman(min);
        number -= min;
        tempResult += arabicToRoman(number);
    } else {
        tempResult = arabicToRoman(max + 1);
        number = 1 + max - number;
        tempResult += arabicToRoman(number);
        // reverses the string so that LX becomes XL (40)
        tempResult = tempResult.split('').reverse().join('');
    }

    currentResult.push(tempResult);
    return currentResult;
}

// converts the base numbers from arabic to roman
function arabicToRoman(number) {
    let romanResult = '';
    let currentRomanLetter = '';

    if (number >= 1 && number <= 4) {
        if (number === 1) {
            romanResult = 'I';
        } else {
            currentRomanLetter = checker(1, 4, number);
            romanResult = currentRomanLetter;
        }
        
    } else if (number >= 5 && number <= 9) {
        if (number === 5) {
            romanResult = 'V';
        } else {
            currentRomanLetter = checker(5, 9, number);
            romanResult = currentRomanLetter;
        }
        
    } else if (number >= 10 && number <= 49) {
        if (number === 10) {
            romanResult = 'X';
        } else {
            currentRomanLetter = checker(10, 49, number);
            romanResult = currentRomanLetter;
        }
    } else if (number >= 50 && number <= 99) {
        if (number === 50) {
            romanResult = 'L';
        } else {
            currentRomanLetter = checker(50, 99, number);
            romanResult = currentRomanLetter;
        }
        
    } else if (number >= 100 && number <= 499) {
        if (number === 100) {
            romanResult = 'C';
        } else {
            currentRomanLetter = checker(100, 499, number);
            romanResult = currentRomanLetter;
        }
        
    } else if (number >= 500 && number <= 999) {
        if (number === 500) {
            romanResult = 'D';
        } else {
            currentRomanLetter = checker(500, 999, number);
            romanResult = currentRomanLetter;
        }
		
    } else if (number >= 1000) {
        // 9000 = MMMMMMMMM
        while(number / 1000 >= 1) {
            romanResult += 'M';
            number -= 1000;
        }
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
    // 3976 = 3000 + 900 + 70 + 6
    while (remainder >= 1) {
        let digit = remainder % 10;
        remainder /= 10;

        breakDown.push(Math.trunc(digit) * counter);
        counter *= 10;
    }

    // Insert each roman number part into the from of the array
    breakDown.forEach((number) => {
        result.unshift(arabicToRoman(number));
    });

    result = flatten(result).join('');
    return result;
}

convertToRoman(3976); // MMMCMLXXVI