'use strict';

//1) анаграмма +
function isAnagram() {
    let cache = {};

    return function memorize(firstWord, secondWord, counter1, counter2, firsWordArray, secondWordArray) { 
        counter1 = counter1 || 0;
        counter2 = counter2 || 0;
        firsWordArray = firsWordArray || firstWord.toLowerCase().split('');
        secondWordArray = secondWordArray || secondWord.toLowerCase().split('');

        if (typeof cache[firstWord + secondWord] !== 'undefined') {
            return cache[firstWord + secondWord];
        }

        if ( firsWordArray.length !== secondWordArray.length ) {
            return cache[firstWord + secondWord] = false;
        }

        if ( firsWordArray.toString() === secondWordArray.toString() ) {
            return cache[firstWord + secondWord] = true;
        } else {
            if ( firsWordArray[counter1] === secondWordArray[counter2] || counter2 > secondWordArray.length ) {
                if ( counter1 > firsWordArray.length ) {
                    return false;
                }
    
                let removeChar = secondWordArray.splice(counter2, 1);
                secondWordArray.push(removeChar[0]);
                counter2 = 0;
    
                return memorize(firstWord, secondWord, ++counter1, counter2, firsWordArray, secondWordArray);
            } else {
                if ( counter1 > firsWordArray.length || counter2 > firsWordArray.length ) {
                    return false;
                }
    
                return memorize(firstWord, secondWord, counter1, ++counter2, firsWordArray, secondWordArray);
            }
        }
    };
}

//3) количество каждой цифры в числе +
function creatDigitsArray(number) {
    let numeralsArray = [];

    while ( number ) {
        let numeral = number % 10;
        number = (number - numeral) / 10;
        numeralsArray.unshift(numeral);
    }

    return numeralsArray;
}

function getCountDigits() {
    let cache = {};

    return function memorize(number, counter, result, digitsArray) {
        counter = counter || 0;
        digitsArray = digitsArray || creatDigitsArray(number);
        result = result || {};

        if ( cache[number] ) {
            return cache[number];
        }

        if ( counter < digitsArray.length ) {
            if ( result[digitsArray[counter]] ) {
                result[digitsArray[counter]]++;
            }
            else{
                result[digitsArray[counter]] = 1;
            }
    
            return memorize(number, ++counter, result, digitsArray);
        }
        cache[number] = result;

        return cache[number];
    };
}

//4) Уникальные слова в предложении +
function findQuantitytUniqWords() {
    let cache = {};

    return function memorize(string, wordsArray, counter, uniqWordsCounter) {
        wordsArray = wordsArray || string.split(/[\s.,]+/gi);
        uniqWordsCounter = uniqWordsCounter || 0;
        counter = counter || 0;

        if ( cache[string] ) {
            return cache[string];
        }

        if ( counter < wordsArray.length ) {
            for ( let word of wordsArray ) {
                for ( let word2 of wordsArray ) {
                    if ( word === word2 ) {
                        ++counter;
                    }
                }
        
                if ( counter === 1 ) {
                    ++uniqWordsCounter;
                }
        
                return memorize(string, wordsArray, counter, ++uniqWordsCounter);
            }
        }
        cache[string] = uniqWordsCounter;

        return cache[string];
    }
}

//5) вхождение каждого слова в строку +
function getQuantityAllWords() {
    let cache = {};

    return function memorize(string, uniqWordsObject, counter) {
        let wordsArray = string.split(/[\s.,]+/gi);
        counter = counter || 0;
        uniqWordsObject = uniqWordsObject || {};

        if ( cache[string] ) {
            return cache[string];
        }

        if ( counter < wordsArray.length ) {
            if ( uniqWordsObject[wordsArray[counter]] ) {
                uniqWordsObject[wordsArray[counter]]++;
            } else {
                uniqWordsObject[wordsArray[counter]] = 1;
            }

            return memorize(string, uniqWordsObject, ++counter);
        }
        cache[string] = uniqWordsObject;

        return cache[string];
    };
}

//6) числа фибоначи -
function getFibonacciNumbers() {
    let cache = [];

    return function memorize(amountNumbers, result, counter) {
        result = result || [0, 1];
        counter = counter || 0;
        
        if ( amountNumbers <= 2 ) {
            cache[amountNumbers] = result.splice(0, amountNumbers);
            return cache[amountNumbers];
        }

        if ( cache[amountNumbers] ) {
            return cache[amountNumbers];
        }

        let prevNumber = result[result.length - 2];
        let nextNumber = result[result.length - 1];
        let sum = prevNumber + nextNumber;

        if (counter < amountNumbers - 2) {
            result.push(sum);
            return memorize(amountNumbers, result, ++counter);
        }
        cache[amountNumbers] = result;
        
        return cache[amountNumbers];
    };
}

//8) факториал +
function getFactorial() {
    let memo = {};

    return function memorize(num){
         if(num == 1){
             return 1;
         }

         let result = memo[num];
         if ( result === undefined ) {
             result = fact(num - 1);
             memo[num] = result;
         }

         return num * result;
    };
}

//9) сумма элементов массива +
function getSumEllementsOfArray() {
    let cache = {};

    return function memorize(array, compare, index, sum) {
        sum = sum || 0;
        index = index || 0;

        if ( cache[array + compare] ) {
            return cache[array + compare];
        }

        if ( index < array.length ) {
            if( compare(array[index]) ){
                sum += array[index];
            }
    
            return memorize(array, compare, ++index, sum);
        }
        cache[array + compare] = sum;

        return cache[array + compare];
    };
}

//10)посчет элементов в массиве +
function getQuantityEllementsOfArray() {
    let cache = {};

    return function memorize(array, compare, index, counter) {
        counter = counter || 0;
        index = index || 0;

        if ( cache[array + compare] ) {
            return cache[array + compare];
        }

        if ( index < array.length ) {
            if( compare(array[index]) ){
                ++counter;
            }
    
            return memorize(array, compare, ++index, counter);
        }
        cache[array + compare] = counter;

        return cache[array + compare];
    }
}

//11) десятичное в двоичное +
function convertDecimalToBinnary() {
    let cache = {};

    return function memorize(number, strBit) {
        strBit = strBit || "";

        if ( cache[number] ) {
            return cache[number];
        }

        if(number){
            if(Number.isInteger(number)){
                strBit += number % 2;
            }
            else{
                number -= number % 1;
                strBit += number % 2;
            }
    
            return memorize(number / 2, strBit);
        }
    
        let reverseString = "";
    
        for ( let i = strBit.length - 2; i >= 0; i-- ) {
            reverseString += strBit.charAt(i);
        }
        cache[number] = reverseString;

        return cache[number];
    };
}

//12) 9-10 задания для двумерных массивов +
function getSumEllementsOfMatrix() {
    let cache = {};

    return function memorize(matrix, compare, rows, colls, sum) {
        rows = rows || 0;
        colls = colls || 0;
        sum = sum || 0;

        if ( cache[matrix + compare] ) {
            return cache[matrix + compare];
        }

        if (rows < matrix.length ) {
            if (colls < matrix[rows].length ) {
                if ( compare(matrix[rows][colls]) ) {
                    sum += matrix[rows][colls];
                }
                return memorize(matrix, compare, rows, ++colls, sum);
            }
            colls = 0;
            return memorize(matrix, compare, ++rows, colls, sum);
        }
        cache[matrix + compare] = sum;

        return cache[matrix + compare];
    };
}

function getQuantityEllementsOfMatrix() {
    let cache = {};

    return function memorize(matrix, compare, rows, colls, counter) {
        rows = rows || 0;
        colls = colls || 0;
        counter = counter || 0;

        if ( cache[matrix + compare] ) {
            return cache[matrix + compare];
        }

        if (rows < matrix.length ) {
            if (colls < matrix[rows].length ) {
                if ( compare(matrix[rows][colls]) ) {
                    ++counter;
                }
                return memorize(matrix, compare, rows, ++colls, counter);
            }
            colls = 0;
            return memorize(matrix, compare, ++rows, colls, counter);
        }
        cache[matrix + compare] = counter;

        return cache[matrix + compare];
    };
}

//13) сумма от минимального до максимального значений +
function getSumEllementsInRange() {
    let cache = {};

    return function memorize(minNumber, maxNumber, compare, sum, index) {
        sum = sum || 0;
        index = index || minNumber;

        if (cache[minNumber + maxNumber + compare]) {
            return cache[minNumber + maxNumber + compare];
        }

        if ( minNumber >= maxNumber ) {
            return false;
        }

        if ( index <= maxNumber ) {
            if ( compare(index) ) {
                sum += index;
            }
            return memorize(minNumber, maxNumber, compare, sum, ++index);
        }
        cache[minNumber + maxNumber + compare] = sum;

        return cache[minNumber + maxNumber + compare];
    };
}

//14) Среднее значение элементов одномерного и двумерного массивов +
function getAverageValueEllementsOfArray() {
    let cache = {};

    return function memorize(array, compare, sum, counter, index) {
        sum = sum || 0;
        counter = counter || 0;
        index = index || 0;

        if ( cache[array + compare] ) {
            return cache[array + compare];
        }

        if ( index < array.length ) {
            if ( compare(array[index]) ) {
                sum += array[index];
                ++counter;
            }
            return memorize(array, compare, sum, counter, ++index)
        }
        cache[array + compare] = sum / counter;

        return cache[array + compare];
    };
}

function getAverageValueEllementsOfMatrix() {
    let cache = {};

    return function memorize(matrix, compare, sum, counter, rows, colls) {
        sum = sum || 0;
        counter = counter || 0;
        rows = rows || 0;
        colls = colls || 0;

        if ( cache[matrix + compare] ) {
            return cache[matrix + compare];
        }

        if ( rows < matrix.length ) {
            if ( colls < matrix[rows].length ) {
                if ( compare(matrix[rows][colls]) ) {
                    sum += matrix[rows][colls];
                    ++counter;
                }
                return memorize(matrix, compare, sum, counter, rows, ++colls);
            }
            colls = 0;
            return memorize(matrix, compare, sum, counter, ++rows, colls);
        }
        cache[matrix + compare] = sum / counter;

        return cache[matrix + compare];
    };
}

//15) транспортирование матрицы +
function transportationMatrix() {
    let cache = {};

    return function memorize(matrix, rows, colls, transposeMatrix) {
        rows = rows || 0;
        colls = colls || 0;
        transposeMatrix = transposeMatrix || [];

        if ( cache[matrix] ) {
            return cache[matrix];
        }

        if ( rows < matrix[0].length ) {       
            if ( typeof transposeMatrix[rows] === "undefined" ) {
                transposeMatrix[rows] = [];
            }
    
            if ( colls < matrix.length ) {
                transposeMatrix[rows][colls] = matrix[colls][rows];
                return memorize(matrix, rows, ++colls, transposeMatrix);
            }
            colls = 0;
            return memorize(matrix, ++rows, colls, transposeMatrix);
        }
        cache[matrix] = transposeMatrix;

        return cache[matrix];
    };
}

//16) суммирование матриц +
function getSumMatrix() {
    let cache = {};

    return function memorize(firstMatrix, secondMatrix, rows, colls, summuryMatrix) {
        rows = rows || 0;
        colls = colls || 0;
        summuryMatrix = summuryMatrix || [];

        if ( cache[firstMatrix + secondMatrix] ) {
            return cache[firstMatrix + secondMatrix];
        }

        if ( rows < firstMatrix.length ) {       
            if ( typeof summuryMatrix[rows] === "undefined" ) {
                summuryMatrix[rows] = [];
            }
    
            if ( colls < firstMatrix[0].length ) {
                summuryMatrix[rows][colls] = firstMatrix[rows][colls] + secondMatrix[rows][colls];
                return memorize(firstMatrix, secondMatrix, rows, ++colls, summuryMatrix);
            }
            colls = 0;
            return memorize(firstMatrix, secondMatrix, ++rows, colls, summuryMatrix);
        }
        cache[firstMatrix + secondMatrix] = summuryMatrix;

        return cache[firstMatrix + secondMatrix];
    };
}

//17) удаление строки если в ней есть нулевой элемент +
function deleteRowWithZeroFromMatrix() {
    let cache = {};

    return function memorize(matrix, rows, colls, newMatrix) {
        rows = rows || 0;
        colls = colls || 0;
        newMatrix = newMatrix || matrix;
        cache[0] = matrix;

        if ( cache[newMatrix] ) {
            return cache[matrix];
        }

        if ( rows < matrix.length ) {
            if ( colls < matrix[0].length ) {
                if ( matrix[rows][colls] === 0 ) {
                    matrix.splice(rows, 1);
                    if ( rows !== 0 ) {
                        --rows;
                    }
                    return memorize(matrix, rows, colls, newMatrix);
                }
                return memorize(matrix, rows, ++colls, newMatrix);
            }
            colls = 0;
            return memorize(matrix, ++rows, colls, newMatrix);
        }
        cache[newMatrix] = matrix;

        return cache[newMatrix];
    };
}

//удаление столбца, если есть нулевой элемент +
function deleteCollumnWithZeroFromMatrix() {
    let cache = {};

    return function memorize(matrix, rows, colls, index, newMatrix) {
        rows = rows || 0;
        colls = colls || 0;
        index = index || 0;
        newMatrix = newMatrix || matrix;
        cache[0] = matrix;

        if ( cache[newMatrix] ) {
            return cache[matrix];
        }
        
        if ( rows < matrix.length ) {
            if ( colls < matrix[rows].length ) {
                if ( matrix[rows][colls] === 0 ) {
                    index = matrix[rows].indexOf(matrix[rows][colls]);
    
                    for ( let i = 0; i < matrix.length; i++) {
                        matrix[i].splice(index, 1);
                    }
                }
                return memorize(matrix, rows, ++colls, index, newMatrix);
            }
            colls = 0;
            return memorize(matrix, ++rows, colls, index, newMatrix);
        }
        cache[newMatrix] = matrix;

        return cache[newMatrix];
    };
}