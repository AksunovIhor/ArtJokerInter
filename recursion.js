'use strict';

//1) анаграмма +
function isAnagram(firstWord, secondWord, counter1, counter2, firsWordArray, secondWordArray) {
    counter1 = counter1 || 0;
    counter2 = counter2 || 0;
    firsWordArray = firsWordArray || firstWord.toLowerCase().split('');
    secondWordArray = secondWordArray || secondWord.toLowerCase().split('');

    if ( firsWordArray.length !== secondWordArray.length ) {
        return false;
    }

    if ( firsWordArray.toString() === secondWordArray.toString() ) {
        return true;
    } else {
        if ( firsWordArray[counter1] === secondWordArray[counter2] ) {
            if ( counter1 > firsWordArray.length ) {
                return false;
            }

            let removeChar = secondWordArray.splice(counter2, 1);
            secondWordArray.push(removeChar[0]);
            counter2 = 0;

            return isAnagram(firstWord, secondWord, ++counter1, counter2, firsWordArray, secondWordArray);
        } else {
            if ( counter1 > firsWordArray.length || counter2 > firsWordArray.length ) {
                return false;
            }

            return isAnagram(firstWord, secondWord, counter1, ++counter2, firsWordArray, secondWordArray);
        }
    }
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

function getCountDigits(number, counter, result, digitsArray) {
    counter = counter || 0;
    digitsArray = digitsArray || creatDigitsArray(number);
    result = result || {};

    if ( counter < digitsArray.length ) {
        if ( result[digitsArray[counter]] ) {
            result[digitsArray[counter]]++;
        }
        else{
            result[digitsArray[counter]] = 1;
        }

        return getCountDigits(number, ++counter, result, digitsArray);
    }

    return result;
}

//4) Уникальные слова в предложении +
function getCountUniqWords(string, wordsArray, counter, uniqWordsCounter) {
    wordsArray = wordsArray || string.split(/[\s.,]+/gi);
    uniqWordsCounter = uniqWordsCounter || 0;
    counter = counter || 0;

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
    
            return getCountUniqWords(string, wordsArray, ++counter, ++uniqWordsCounter);
        }
    }

    return uniqWordsCounter;
}

//5) вхождение каждого слова в строку +
function getQuantityOfEachWords(string, uniqWordsObject, counter) {
    let wordsArray = string.split(/[\s.,]+/gi);
    counter = counter || 0;
    uniqWordsObject = uniqWordsObject || {};

    if ( counter < wordsArray.length ) {
        uniqWordsObject[wordsArray[counter]] = ++uniqWordsObject[wordsArray[counter]] || 1;
        return getQuantityOfEachWords(string, uniqWordsObject, ++counter);
    }

    return uniqWordsObject;
}

//6) числа фибоначи +
function getFibonacciNumbers(amountNumbers) {
    if ( amountNumbers <= 2 ) {
        return [0, 1].splice(0, amountNumbers);
    }

    let fibonacciNumbers = getFibonacciNumbers(amountNumbers - 1);
    let prevNumber = fibonacciNumbers.length - 1;
    let nextNumber = fibonacciNumbers.length - 2;

    fibonacciNumbers.push(fibonacciNumbers[prevNumber] + fibonacciNumbers[nextNumber]);

    return fibonacciNumbers;
}

//8) факториал +
function getFactorial(number) {
    if(number === 0 || number === 1) {
        return number;
    }
    
    return number * getFactorial(number - 1); 
}

//9) сумма элементов массива +
function getSumEllementsOfArray(array, compare, index, sum) {
    sum = sum || 0;
    index = index || 0;

    if ( index < array.length ) {
        if( compare(array[index]) ){
            sum += array[index];
        }

        return getSumEllementsOfArray(array, compare, ++index, sum);
    }

    return sum;
}

//10)посчет элементов в массиве +
function getQuantityEllementsOfArray(array, compare, index, counter) {
    counter = counter || 0;
    index = index || 0;

    if ( index < array.length ) {
        if ( compare(array[index]) ) {
            ++counter;
        }
        return getQuantityEllementsOfArray(array, compare, ++index, counter);
    }

    return counter;
}

//11) десятичное в двоичное +
function convertDecimalToBinnary(number, strBit) {
    strBit = strBit || "";

    if(number){
        if(Number.isInteger(number)){
            strBit += number % 2;
        }
        else{
            number -= number % 1;
            strBit += number % 2;
        }

        return convertDecimalToBinnary(number / 2, strBit);
    }

    let reverseString = "";

    for ( let i = strBit.length - 2; i >= 0; i-- ) {
        reverseString += strBit.charAt(i);
    }

    return reverseString;
}

//12) 9-10 задания для двумерных массивов +
function getSumEllementsOfMatrix(matrix, compare, rows, colls, sum) {
    rows = rows || 0;
    colls = colls || 0;
    sum = sum || 0;

    if (rows < matrix.length ) {
        if (colls < matrix[rows].length ) {
            if ( compare(matrix[rows][colls]) ) {
                sum += matrix[rows][colls];
            }
            return getSumEllementsOfMatrix(matrix, compare, rows, ++colls, sum);
        }
        colls = 0;
        return getSumEllementsOfMatrix(matrix, compare, ++rows, colls, sum);
    }

    return sum;
}

function getQuantityEllementsOfMatrix(matrix, compare, rows, colls, counter) {
    rows = rows || 0;
    colls = colls || 0;
    counter = counter || 0;

    if (rows < matrix.length ) {
        if (colls < matrix[rows].length ) {
            if ( compare(matrix[rows][colls]) ) {
                ++counter;
            }
            return getQuantityEllementsOfMatrix(matrix, compare, rows, ++colls, counter);
        }
        colls = 0;
        return getQuantityEllementsOfMatrix(matrix, compare, ++rows, colls, counter);
    }

    return counter;
}

//13) сумма от минимального до максимального значений +
function getSumEllementsInRange(minNumber, maxNumber, compare, sum, index){
    sum = sum || 0;
    index = index || minNumber;

    if ( minNumber >= maxNumber ) {
        return false;
    }
    
    if ( index <= maxNumber ) {
        if ( compare(index) ) {
            sum += index;
        }
        return getSumEllementsInRange(minNumber, maxNumber, compare, sum, ++index);
    }

    return sum;
}

//14) Среднее значение элементов одномерного и двумерного массивов + 
function getAverageValueEllementsOfArray(array, compare, sum, counter, index) {
    sum = sum || 0;
    counter = counter || 0;
    index = index || 0;
    
    if ( index < array.length ) {
        if ( compare(array[index]) ) {
            sum += array[index];
            ++counter;
        }
        return getAverageValueEllementsOfArray(array, compare, sum, counter, ++index)
    }

    return sum / counter;
}

function getAverageValueEllementsOfMatrix(matrix, compare, sum, counter, rows, colls) {
    sum = sum || 0;
    counter = counter || 0;
    rows = rows || 0;
    colls = colls || 0;
    
    if ( rows < matrix.length ) {
        if ( colls < matrix[rows].length ) {
            if ( compare(matrix[rows][colls]) ) {
                sum += matrix[rows][colls];
                ++counter;
            }
            return getAverageValueEllementsOfMatrix(matrix, compare, sum, counter, rows, ++colls);
        }
        colls = 0;
        return getAverageValueEllementsOfMatrix(matrix, compare, sum, counter, ++rows, colls);
    }
    
    return sum / counter;
}

//15) транспортирование матрицы + 
function transportationMatrix(matrix, rows, colls, transposeMatrix){
    rows = rows || 0;
    colls = colls || 0;
    transposeMatrix = transposeMatrix || [];

    if ( rows < matrix[0].length ) {       
        if ( typeof transposeMatrix[rows] === "undefined" ) {
            transposeMatrix[rows] = [];
        }

        if ( colls < matrix.length ) {
            transposeMatrix[rows][colls] = matrix[colls][rows];
            return transportationMatrix(matrix, rows, ++colls, transposeMatrix);
        }
        colls = 0;
        return transportationMatrix(matrix, ++rows, colls, transposeMatrix);
    }

    return transposeMatrix;
}

//16) суммирование матриц
function getSumMatrix(firstMatrix, secondMatrix, rows, colls, summuryMatrix){
    rows = rows || 0;
    colls = colls || 0;
    summuryMatrix = summuryMatrix || [];

    if ( rows < firstMatrix.length ) {       
        if ( typeof summuryMatrix[rows] === "undefined" ) {
            summuryMatrix[rows] = [];
        }

        if ( colls < firstMatrix[0].length ) {
            summuryMatrix[rows][colls] = firstMatrix[rows][colls] + secondMatrix[rows][colls];
            return getSumMatrix(firstMatrix, secondMatrix, rows, ++colls, summuryMatrix);
        }
        colls = 0;
        return getSumMatrix(firstMatrix, secondMatrix, ++rows, colls, summuryMatrix);
    }

    return summuryMatrix;
}

//17) удаление строки если в ней есть нулевой элемент +
function deleteRowWithZeroFromMatrix(matrix, rows, colls){
    rows = rows || 0;
    colls = colls || 0;

    if ( rows < matrix.length ) {
        if ( colls < matrix[0].length ) {
            if ( matrix[rows][colls] === 0 ) {
                matrix.splice(rows, 1);
                if ( rows !== 0 ) {
                    --rows;
                }
                return deleteRowWithZeroFromMatrix(matrix, rows, colls);
            }
            return deleteRowWithZeroFromMatrix(matrix, rows, ++colls);
        }
        colls = 0;
        return deleteRowWithZeroFromMatrix(matrix, ++rows, colls);
    }

    return matrix;
}

//удаление столбца, если есть нулевой элемент +
function deleteCollumnWithZeroFromMatrix(matrix, rows, colls, index) {
    rows = rows || 0;
    colls = colls || 0;
    index = index || 0;

    if ( rows < matrix.length ) {
        if ( colls < matrix[rows].length ) {
            if ( matrix[rows][colls] === 0 ) {
                index = matrix[rows].indexOf(matrix[rows][colls]);

                for ( let i = 0; i < matrix.length; i++) {
                    matrix[i].splice(index, 1);
                }
            }
            return deleteCollumnWithZeroFromMatrix(matrix, rows, ++colls, index);
        }
        colls = 0;
        return deleteCollumnWithZeroFromMatrix(matrix, ++rows, colls, index);
    }

    return matrix;
}

