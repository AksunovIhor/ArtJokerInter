'use strict';

//1) анаграмма
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
            console.log("cached");
            return cache[firstWord + secondWord] = false;
        }

        if ( firsWordArray.toString() === secondWordArray.toString() ) {
            console.log("cached");
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

//3) количество каждой цифры в числе
function creatDigitsArray(number) {
    let numeralsArray = [];

    while ( number ) {
        let numeral = number % 10;
        number = (number - numeral) / 10;
        numeralsArray.unshift(numeral);
    }

    return numeralsArray;
}

function getDigitsCounter() {
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
    
        return cache[number] = result;
    };
}

//4) Уникальные слова в предложении
function uniqWords() {
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
        
                return uniqWords(string, wordsArray, ++counter, ++uniqWordsCounter);
            }
        }
    
        return cache[string] = uniqWordsCounter;
    }
}

function uniqWords(string, wordsArray, counter, uniqWordsCounter) {

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
    
            return uniqWords(string, wordsArray, ++counter, ++uniqWordsCounter);
        }
    }

    return uniqWordsCounter;
}

//5) вхождение каждого слова в строку
function getWordsQuantity() {
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

        return cache[string] = uniqWordsObject;
    };
    
}

//6) числа фибоначи
function getFibonacciNumbers() {
    let cache = [];

    return function memorize(amountNumbers, result, counter) {
        if (cache[0] >= amountNumbers) {
            return cache[1][amountNumbers];
        }

        result = result || 0;
        counter = counter || 0;

        let prevNumber = fibonacciNumbers.length - 1;
        let nextNumber = fibonacciNumbers.length - 2;
        let sum = prevNumber + nextNumber;

        if (counter < amountNumbers - 1) {
            result.push(sum);
            return memorize(amountNumbers, result, ++counter);
        }

        cache[0] = amountNumbers;
        return cache[1] = result;
    };
}

//8) факториал
function numbersCount(){
    let cache = {};

    return function memorize(number, counter){
        counter = counter || 0;
        let numeral = 0;
        
        if(number){
            let result = 0;

            cache[number] = cache[number] || {};

            if(number in cache && counter in cache[number]){
                result = cache[number][cache];
            }
            else{
                numeral = number % 10;
                result = numbersCount((number - numeral) / 10, ++counter);
                cache[number][counter] = result;
            }
        }
        return counter;
    };
}

//9) сумма элементов массива
function getArrayEllemSum() {
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

        return cache[array + compare] = sum;
    };
}

//10)посчет элементов в массиве
function getArrayEllemCount() {
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

        return cache[array + compare] = counter;

    }
}

//11) десятичное в двоичное
function decToBin() {
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
                number = number - (number % 1);
                strBit += number % 2;
            }
    
            return memorize(number / 2, strBit);
        }
    
        let reverseString = "";
    
        for ( let i = strBit.length - 2; i >= 0; i-- ) {
            reverseString += strBit.charAt(i);
        }
    
        return cache[number] = reverseString;
    };
}

//12) 9-10 задания для двумерных массивов
function getMatrixEllemSum() {
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
    
        return cache[matrix + compare] = sum;
    };
}

function getMatrixEllemCount() {
    let cache = {};

    return function memorize(matrix, compare, rows, colls, counter) {
        rows = rows || 0;
        colls = colls || 0;
        sum = sum || 0;

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
    
        return cache[matrix + compare] = counter;

    };
}

//13) сумма от минимального до максимального значений
function sumMinToMax() {
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
    
        return cache[minNumber + maxNumber + compare] = sum;
    };
}

//14) Среднее значение элементов одномерного и двумерного массивов
function getArrayEllemAverageSum() {
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
    
        return cache[array + compare] = (sum / counter);
    };
}

function getMatrixEllemAverageSum() {
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
        
        return cache[matrix + compare] = sum / counter;
    };
}

//15) транспортирование матрицы
function getTransposeMatrix() {
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
        return cache[matrix] = transposeMatrix;
    };
}

//16) суммирование матриц
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
    
        return cache[firstMatrix + secondMatrix] = summuryMatrix;
    }
}

//17) удаление строки если в ней есть нулевой элемент
function dellMatrixRowWithZero() {
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
                return memorize(matrix, rows, colls, newMatrix);
            }
            colls = 0;
            return memorize(matrix, rows, colls, newMatrix);
        }
    
        return cache[newMatrix] = matrix;
    };
}

//удаление столбца, если есть нулевой элемент
function dellMatrixCollumnWithZero() {
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
                return dellMatrixCollumnWithZero(matrix, rows, ++colls, index);
            }
            colls = 0;
            return dellMatrixCollumnWithZero(matrix, ++rows, colls, index);
        }
        return cache[newMatrix] = matrix;
    };
}