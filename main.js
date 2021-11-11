'use strict';

//1) Анаграмма  
function isAnagram(firstWord, secondWord) {
    if (typeof firstWord !== 'string' || typeof secondWord !== 'string') {
        throw ("Both values must be words");
    }

    if (firstWord.length !== secondWord.length) {
        return false;
    }
    
    for (let i = 0; i < firstWord.length; i++) {
        let char1 = firstWord[i];
        let counter1 = 0;
        let counter2 = 0;
        
        for (let j = 0; j < secondWord.length; j++) {
            let char2 = firstWord[j];
            
            if (char1 === char2) {
                counter1++;
            }

            char2 = secondWord[j];

            if (char1 === char2) {
                counter2++;
            }
        }

        if (counter1 !== counter2) {
            return false;
        }
    }

    return true;
}

const isAnagramES6Standart = (firstWord, secondWord) => [...firstWord.toLowerCase()].sort().toString() === 
[...secondWord.toLowerCase()].sort().toString();

//3) количество цифр в числе 
function creatDigitsArray(number) {
    let digitsArray = [];
    try { 

    }
    catch () {
        
    }
    if (typeof number !== 'number') {
        throw ("Value must be a number");
    }
    
    while (number) {
        let digit = number % 10;
        number = (number - digit) / 10;
        digitsArray.unshift(digit);
    }

    return digitsArray;
}

function getCountDigits(number) {
    let digitsArray = creatDigitsArray(number);
    let result = {};

    if (typeof number !== 'number') {
        throw ("Value must be a number");
    }

    for (let i = 0; i < digitsArray.length; i++) {
        let digit = digitsArray[i];
        let counter = 0;

        for (let j = 0; j < digitsArray.length; j++) {
            if (digit === digitsArray[j]) {
                counter++;
            }
            result[digit] = counter;
        }
    }

    return result;
}

//4) уникальные слова в предложении 
function findQuantitytUniqWords(string){
    if (typeof string !== 'string') {
        throw ("Value must be string");
    }

    if (string === "") {
        throw ("String can't be empty");
    }

    let counter = 0;
    let uniqWordsCounter = 0;
    let wordsArray = string.split(/[\s.,]+/gi);
    
    for (let word1 of wordsArray) {
        for (let word2 of wordsArray) {
            if ( word1 === word2 ) {
                counter++;
            }
        }

        if (counter === 1) {
            uniqWordsCounter++;
        }
        counter = 0;
    }
    
    return uniqWordsCounter;
}
findQuantitytUniqWords("asd, asd, fg, hy, re, fgd, asd ert asd ert");

//5) вхождение каждого слова в строку 
function getQuantityAllWords(string){
    let wordsArray = string.split(/[\s.,]+/gi);
    let counter = 0;
    let uniqWordsObject = {};

    for (let i = 0; i < wordsArray.length; i++) {
        let word = wordsArray[i];

        for (let j = 0; j < wordsArray.length; j++) {
            if (word === wordsArray[j]) {
                counter++;
            }
        }

        uniqWordsObject[word] = counter;
        counter = 0;
    }

    return uniqWordsObject;
}

//6) вывод чисел фибоначи 
function getFibonacciNumbers(amountNumbers){
    let fibonacciNumbers = [0, 1].splice(0, amountNumbers);

    for (let i = 2; i < amountNumbers; i++) {
        fibonacciNumbers.push(fibonacciNumbers[i - 1] + fibonacciNumbers[i - 2]);
    }

    return fibonacciNumbers;
}

//7)площадь и периметр круга, треугольника, четырехугольника + 
class Quadrangle{
    #aSide;
    #bSide;
    #cSide;
    #dSide;

    constructor(aSide, bSide, cSide, dSide) {
        if (aSide <= 0 || bSide <= 0 || cSide <= 0 || dSide <= 0) {
            throw ("Neither side can't be 0 or less 0");
        }
        this.#aSide = aSide;
        this.#bSide = bSide;
        this.#cSide = cSide;
        this.#dSide = dSide;
    }
    
    /** 
     * @param {number} aSide
     */
    set setASide(aSide){
        this.#aSide = aSide;
    }

    /** 
     * @param {number} bSide
     */
     set setBSide(bSide){
        this.#bSide = bSide;
    }

    /** 
     * @param {number} cSide
     */
     set setCSide(cSide){
        this.#cSide = cSide;
    }

    /** 
     * @param {number} dSide
     */
     set setDSide(dSide){
        this.#aSide = dSide;
    }

    square(){
        let halfPerimeter = (this.#aSide + this.#bSide + this.#cSide + this.#dSide) / 2;
        let result =  Math.sqrt((halfPerimeter - this.#aSide) * (halfPerimeter - this.#bSide)
         * (halfPerimeter - this.#cSide) * (halfPerimeter - this.#dSide));
        if (result === 0) {
            throw ("Triangle does not exist");
        }
        return result;
    }

    perimeter(){
        return this.#aSide + this.#bSide + this.#cSide + this.#dSide;
    }
}

class Triangle{
    #aSide;
    #bSide;
    #cSide;

    constructor(aSide, bSide, cSide){
        if (aSide <= 0 || bSide <= 0 || cSide <= 0) {
            throw ("Neither side can't be 0 or less 0");
        }
        this.#aSide = aSide;
        this.#bSide = bSide;
        this.#cSide = cSide;
    }

    /**
     * @param {number} aSide
    */
    set setASide(aSide){
        this.#aSide = aSide;
    }

    /**
     * @param {number} bSide
     */
    set setBSide(bSide){
        this.#bSide = bSide;
    }

    /**
     * @param {number} cSide
    */
    set setCSide(cSide){
        this.#cSide = cSide;
    }

    square(){
        let halfPerimeter = (this.#aSide + this.#bSide + this.#cSide) / 2;
        let result =  Math.sqrt(halfPerimeter * (halfPerimeter - this.#aSide) * (halfPerimeter - this.#bSide) * (halfPerimeter - this.#cSide));
        if (result === 0) {
            throw ("Triangle does not exist");
        }
        return result;
    }

    perimeter() {
        return this.#aSide + this.#bSide + this.#cSide;
    }
}

class Circle{
    #radius;

    constructor(radius){
        if (radius <= 0) {
            throw ("Radius can't be 0 or less 0");
        }
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

    for (let i = number; i > 1; i--) {
        result *= i;
    }

    return result;
}

//9) сумма элементов массива
Array.prototype.getSumEllements = function(compare) {
    let sum = 0;

    for (let i  = 0; i < this.length; i++) {
        if ( compare(this[i]) ) {
            sum += this[i];
        }
    }

    return sum;
};

//10) подсчет элементов в массиве
Array.prototype.getQuantityEllements = function(compare) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (compare(this[i])) {
            counter++;
        }
    }

    return counter;
};

//11) десятичное в двоичное
function convertDecimalToBinnary(number) {
    let strBit = "";

    while (number) {
        number = parseInt(number);
        strBit += number % 2;
        number /= 2;
    }
    
    let reverseString = "";
    
    for (let i = strBit.length - 2; i >= 0; i--) {
        reverseString += strBit.charAt(i);
    }

    return reverseString;
}

//12) 9-10 задания для двумерных массивов
Array.prototype.getSumEllementsMatrix = function(compare) {
    let sum = 0;

    for (let i = 0; i < this.length; i++) {

        for (let j = 0; j < this[i].length; j++) {  
            if (compare(this[i][j])) {
                sum += this[i][j];
            }
        }
    }

    return sum;
};

Array.prototype.getQuantityEllementsMatrix = function(compare) {
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            if (compare(this[i][j])) {
                counter++;
            }
        }
    }

    return counter;    
};

//13) сумма от минимального до максимального значений
function getSumEllementsInRange(minNumber, maxNumber, compare) {
    let sum = 0;

    if (typeof minNumber === 'number' && typeof maxNumber === 'number') {
        if (minNumber >= maxNumber) {
            throw ("Min number must be less than max number");
        }

        for (let i = minNumber; i <= maxNumber; i++) {
            if (compare([i])) {
                sum += i;
            }
        }
    
        return sum;
    }

    throw ("Both value must be number");
}
getSumEllementsInRange(11, 10, () => ({}));

//14) Среднее значение элементов одномерного и двумерного массивов
Array.prototype.getAverageValueEllements = function(compare) {
    let sum = 0;
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        if (compare(this[i])) {
            sum += this[i];
            counter++;
        }
    }
    return sum / counter;
}; 

Array.prototype.getAverageValueEllementsMatrix = function(compare) {
    let sum = 0;
    let counter = 0;

    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < this[i].length; j++) {
            if (compare(this[i][j])) {
                sum += this[i][j];
                counter++;
            }
        }
    }

    return sum / counter;
};

//15) транспортирование матрицы
function transportationMatrix(matrix) {
    let transposeMatrix = [];

    for (let i = 0; i < matrix[0].length; i++) {
        transposeMatrix[i] = [];
        
        for (let j = 0; j < matrix.length; j++) {
            transposeMatrix[i][j] = matrix[j][i];
        }
    }

    return transposeMatrix;
}

//16 суммирование матриц
function getSumMatrix(firstMatrix, secondMatrix) {
    let summuryMatrix = [];
    let rows = firstMatrix.length;
    let collumns = firstMatrix[0].length;

    if ( firstMatrix.length > secondMatrix.length || secondMatrix.length > firstMatrix.length ) {
        return [0];
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
function deleteRowWithZeroFromMatrix(matrix, compare) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j of matrix[i]) {
            if(compare(j)) {
                matrix.splice(i, 1);
                --i
            }
        }
    }

    return matrix;
}

//удаление столбца, если есть нулевой элемент
function deleteCollumnWithZeroFromMatrix(matrix, compare) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (compare(matrix[i][j])) {
               let index = matrix[i].indexOf(matrix[i][j]);

               for (let k = 0; k < matrix.length; k++) {
                   matrix[k].splice(index, 1);
               }
            }
        }
    }

    return matrix;
}

//////////////////////////////
function findQuantitytUniqWords(string){
    try {
        if (typeof string !== 'string') {
            throw new Error ("Value must be string");
        }
        
        if (string === "") {
            throw new Error ("String can't be empty");
        }
    
        let counter = 0;
        let uniqWordsCounter = 0;
        let wordsArray = string.split(/[\s.,]+/gi);
        
        for (let word1 of wordsArray) {
            for (let word2 of wordsArray) {
                if ( word1 === word2 ) {
                    counter++;
                }
            }
    
            if (counter === 1) {
                uniqWordsCounter++;
            }
            counter = 0;
        }
        
        return uniqWordsCounter;
    }

    catch(e) {
        return e.message;
    }
    
}
findQuantitytUniqWords("asd, asd, fg, hy, re, fgd, asd ert asd ert");