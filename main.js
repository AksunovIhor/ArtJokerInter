'use strict';

//1) Анаграмма + 
function isAnagram(firstWord, secondWord) {
    if ( firstWord.length !== secondWord.length ) {
        return false;
    }
    
    for ( let i = 0; i < firstWord.length; i++ ) {
        let char1 = firstWord[i];
        let counter1 = 0;
        let counter2 = 0;
        
        for ( let j = 0; j < secondWord.length; j++ ) {
            let char2 = firstWord[j];
            
            if ( char1 === char2 ) {
                counter1++;
            }

            char2 = secondWord[j];

            if ( char1 === char2 ) {
                counter2++;
            }
        }

        if ( counter1 !== counter2 ) {
            return false;
        }
    }

    return true;
}

const isAnagramES6Standart = (firstWord, secondWord) => [...firstWord.toLowerCase()].sort().toString() === 
[...secondWord.toLowerCase()].sort().toString();

//3) количество цифр в числе +
function creatDigitsArray(number) {
    let digitsArray = [];

    while ( number ) {
        let digit = number % 10;
        number = (number - digit) / 10;
        digitsArray.unshift(digit);
    }

    return digitsArray;
}

function getCountDigits(number) {
    let digitsArray = creatArrayDigits(number);
    let result = {};

    for ( let i = 0; i < digitsArray.length; i++ ) {
        let digit = digitsArray[i];
        let counter = 0;

        for ( let j = 0; j < digitsArray.length; j++ ) {
            if ( digit === digitsArray[j] ) {
                counter++;
            }
            result[digit] = counter;
        }
    }

    return result;
}

//4) уникальные слова в предложении +
function getCountUniqWords(string){
    let counter = 0;
    let uniqWordsCounter = 0;
    let wordsArray = string.split(/[\s.,]+/gi);
    
    for ( let word1 of wordsArray ) {
        for ( let word2 of wordsArray ) {
            if ( word1 === word2 ) {
                counter++;
            }
        }

        if (counter === 1 ) {
            uniqWordsCounter++;
        }
        counter = 0;
    }
    
    return uniqWordsCounter;
}

//5) вхождение каждого слова в строку +
function getQuantityOfEachWords(string){
    let wordsArray = string.split(/[\s.,]+/gi);
    let counter = 0;
    let uniqWordsObject = {};

    for ( let i = 0; i < wordsArray.length; i++ ) {
        let word = wordsArray[i];

        for ( let j = 0; j < wordsArray.length; j++ ) {
            if ( word === wordsArray[j] ) {
                counter++;
            }
        }

        uniqWordsObject[word] = counter;
        counter = 0;
    }

    return uniqWordsObject;
}

//6) вывод чисел фибоначи + 
function getFibonacciNumbers(amountNumbers){
    let fibonacciNumbers = [0, 1].splice(0, amountNumbers);

    for ( let i = 2; i < amountNumbers; i++ ) {
        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }

    return fibonacciNumbers;
}

//7)площадь и периметр круга, треугольника, квадрата + 
class Rectangle{
    #width;
    #height;

    constructor(width, height){
        this.#width = width;
        this.#height = height;
    }
    
    /** 
     * @param {number} width
     */
    set setWidth(width){
        this.#width = width;
    }
    
    /**
     * @param {number} height
    */
    set setHeight(height){
        this.#height = height;
    }

    square(){
        return this.#width * this.#height;
    }

    perimeter(){
        return (this.#width + this.#height) * 2;
    }
}

class Triangle{
    #aSide;
    #bSide;
    #cSide;

    constructor(aSide, bSide, cSide){
        this.#aSide = aSide;
        this.#bSide = bSide;
        this.#cSide = cSide;
    }

    /**
     * @param {number} aSide
    */
    set aSide(aSide){
        this.#aSide = aSide;
    }

    /**
     * @param {number} bSide
     */
    set bSide(bSide){
        this.#bSide = bSide;
    }

    /**
     * @param {number} cSide
    */
    set cSide(cSide){
        this.#cSide = cSide;
    }

    square(){
        let halfPerimeter = (this.#aSide + this.#bSide + this.#cSide) / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.#aSide) * (halfPerimeter - this.#bSide) * (halfPerimeter - this.#cSide));
    }

    perimeter() {
        return this.#aSide + this.#bSide + this.#cSide;
    }
}

class Circle{
    #radius;

    constructor(radius){
        this.#radius = radius;
    }

    /**
     * @param {number} radius
     */
    set setRadius(radius){
        this.#radius = radius;
    }

    square(){
        return Math.PI * (this.#radius * this.#radius);
    }

    perimeter(){
        return 2 * Math.PI * this.#radius;
    }
}

//8) факториал
function getFactorial(number){
    let result = 1;

    for ( let i = number; i > 1; i-- ) {
        result *= i;
    }

    return result;
}

//9) сумма элементов массива
Array.prototype.getSumEllements = function(compare) {
    let sum = 0;

    for ( let i  = 0; i < this.length; i++ ) {
        if ( compare(this[i]) ) {
            sum += this[i];
        }
    }

    return sum;
};

//10) подсчет элементов в массиве
Array.prototype.getQuantityEllements = function(compare) {
    let counter = 0;

    for ( let i = 0; i < this.length; i++ ) {
        if ( compare(this[i]) ) {
            counter++;
        }
    }

    return counter;
};

//11) десятичное в двоичное
function convertDecimalToBinnary(number) {
    let strBit = "";
    let nextNumber = number;

    while ( nextNumber > 0 ) {
        
        if ( Number.isInteger(nextNumber) ) {
            strBit += nextNumber % 2;
        }
        else{
            nextNumber -= nextNumber % 1;
            strBit += nextNumber % 2;
        }
        nextNumber /= 2;
    }
    
    let reverseString = "";
    for ( let i = strBit.length - 2; i >= 0; i-- ) {
        reverseString += strBit.charAt(i);
    }

    return reverseString;
}

//12) 9-10 задания для двумерных массивов
Array.prototype.getSumEllementsOfMatrix = function(compare) {
    let sum = 0;

    for ( let i = 0; i < this.length; i++ ) {
        for ( let j = 0; j < this.length; j++ ) {
            if ( compare(this[i][j]) ){
                sum += this[i][j];
            }
        }
    }

    return sum;
};

Array.prototype.getQuantityEllementsOfMatrix = function(compare) {
    let counter = 0;

    for ( let i = 0; i < this.length; i++ ) {
        for ( let j = 0; j < this.length; j++ ) {
            if ( compare(this[i][j]) ) {
                counter++;
            }
            
        }
    }

    return counter;
};

//13) сумма от минимального до максимального значений
function getSumEllementsInRange(minNumber, maxNumber, compare) {
    let sum = 0;

    if ( minNumber >= maxNumber ) {
        return false;
    }
    
    for ( let i = minNumber; i <= maxNumber; i++ ) {
        if ( compare([i]) ) {
            sum += i;
        }
    }

    return sum;
}

//14) Среднее значение элементов одномерного и двумерного массивов
Array.prototype.getAverageValueEllements = function(compare) {
    let sum = 0;
    let counter = 0;

    for ( let i = 0; i < this.length; i++ ) {
        if ( compare(this[i]) ) {
            sum += this[i];
            counter++;
        }
    }

    return sum / counter;
};

Array.prototype.getAverageValueEllementsOfMatrix = function(compare) {
    let sum = 0;
    let counter = 0;

    for ( let i = 0; i < this.length; i++ ) {
        for ( let j = 0; j < this.length; j++ ) {
            if ( compare(this[i][j]) ) {
                sum += this[i][j];
                counter++;
            }
            
        }
    }

    return sum / counter;
};

//15) транспортирование матрицы
function transportationMatrix(matrix) {
    let rows = matrix.length;
    let collumns = matrix[0].length;
    let transposeMatrix = [];

    for ( let i = 0; i < collumns; i++ ) {
        transposeMatrix[i] = [];

        for ( let j = 0; j < rows; j++ ) {
            transposeMatrix[i][j] = matrix[j][i];
        }
    }

    return transposeMatrix;
}

//16 суммирование матриц
function getSumMatrix(firstMatrix, secondMatrix) {

    let rows = firstMatrix.length;
    let collumns = firstMatrix[0].length;
    let summuryMatrix = [];

    if ( firstMatrix.length > secondMatrix.length || secondMatrix.length > firstMatrix.length ) {
        return false;
    }
    
    for ( let i = 0; i < rows; i++ ) {
        summuryMatrix[i] = [];

        for ( let j = 0; j < collumns; j++ ) {
            summuryMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
        }
    }
    
    return summuryMatrix;
}

//17) удаление строки если в ней есть нулевой элемент
function deleteRowWithZeroFromMatrix(matrix) {

    for ( let i = 0; i < matrix.length; i++ ) {
        for ( let j of matrix[i] ) {
            if ( j === 0 ) {
                matrix.splice(i, 1);
                i--;
            }
        }
    }

    return matrix;
}

//удаление столбца, если есть нулевой элемент
function deleteCollumnWithZeroFromMatrix(matrix) {
    for ( let i = 0; i < matrix.length; i++ ) {
        for ( let j = 0; j < matrix[i].length; j++ ) {
            if ( matrix[i][j] === 0 ) {
               let index = matrix[i].indexOf(matrix[i][j]);

               for ( let k = 0; k < matrix.length; k++ ) {
                   matrix[k].splice(index, 1);
               }
            }
        }
    }

    return matrix;
}