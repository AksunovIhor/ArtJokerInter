'use strict';

//1) Анаграмма + 
function isAnagramma(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    };
    
    for (let i = 0; i < firstWord.length; i++) {
        let char1 = firstWord[i];
        let counter1 = 0;
        let counter2 = 0;
        for (let j = 0; j < secondWord.length; j++) {
            let char2 = firstWord[j];
            if (char1 === char2) {
                counter1++;
            };
            char2 = secondWord[j];
            if (char1 === char2) {
                counter2++;
            };

        };

        if (counter1 !== counter2) {
            return false;
        };
    };

    return true;
}

//3) количество цифр в числе + 
function numbersCount(number){
    let counter = 0;
    let numeral = 0;

    while(number) {
        numeral = number % 10;
        number = (number - numeral) / 10;
        counter++;
    }

    return counter;
}

//4) уникальные слова в предложении +/-
    function unicWords(string){
        let counter = 0;
        let target = /[\s.,]+/gi;
        let wordArray = string.split(target);
        console.log(wordArray);
        for(let i = 0; i < wordArray.length; i++){
            let someWord = new RegExp(wordArray[i]);
            if(!someWord.test(wordArray)){
                counter++;
            }
        }
        return counter;
    }
let testString = "frt, ad, asd, rwefs, frt, frt, sads, asd, 43rfw. asd";
unicWords(testString);
//5) вхождение каждого слова в строку +/-
let someStr = "frt, ad, asd, rwefs, frt, frt, sads, asd, 43rfw. asd";
function wordsCounter(string){
    let wordsArray = string.toLowerCase().split(" ");
    let word = wordsArray[0];
    let counter = 0;
    console.log(wordsArray);
    for(let j = 0; j <= wordsArray.length - 1; j++){
        word = wordsArray[j];
        for(let i = 0; i <= wordsArray.length - 1; i++){
            if(word == wordsArray[j]){
                counter++;
                console.log(`word ${word} and ${counter}`);
                break;
            }
        }
        
    }
    
}
wordsCounter(someStr);

//6) вывод чисел фибоначи + 
function getFibonacciNumbers(amountNumbers){
    let fibNumbers = [0, 1];

    for(let i = 2; i < amountNumbers; i++){
        fibNumbers.push(fibNumbers[i - 1] + fibNumbers[i - 2]);
    }

    return fibNumbers;
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
     * @param {number} valueWidth
     */
    set setWidth(valueWidth){
        this.#width = valueWidth;
    }
    
    /**
     * @param {number} valueHeight
    */
    set setHeight(valueHeight){
        this.#height = valueHeight;
    }

    get getRectangleSquare(){
        return this.#width * this.#height;
    }

    get getRectanglePerimeter(){
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
     * @param {number} value
    */
    set setASide(value){
        this.#aSide = value;
    }

    /**
     * @param {number} value
     */
    set setBSide(value){
        this.#bSide = value;
    }

    /**
     * @param {number} value
    */
    set setCSide(value){
        this.#cSide = value;
    }

    get getTriangleSquare(){
        let halfPerimeter = (this.#aSide + this.#bSide + this.#cSide) / 2;
        return Math.sqrt(halfPerimeter * (halfPerimeter - this.#aSide) * (halfPerimeter - this.#bSide) * (halfPerimeter - this.#cSide));
    }
}

class Circle{
    #radius;

    constructor(radius){
        this.#radius = radius;
    }

    /**
     * @param {number} value
     */
    set setRadius(value){
        this.#radius = value;
    }

    get getCircleSquare(){
        return Math.PI * (this.#radius * this.#radius);
    }

    get getCirclePerimeter(){
        return 2 * Math.PI * this.#radius;
    }
}

//8) факториал +
function getFactorial(number){
    let result = 1;
    for(let i = number; i > 1; i--){
        result *= i;
    }
    return result;
}

//9) сумма элементов массива +
Array.prototype.ellemSum = function(compare){
    let sum = 0;

    for(let i  = 0; i < this.length; i++){
        if(compare(this[i])){
            sum += this[i];
        }
    }

    return sum;
}

//10) подсчет элементов в массиве +
Array.prototype.ellemCounter = function(compare){
    let counter = 0;

    for(let i = 0; i < this.length; i++){
        if(compare(this[i])){
            counter++;
        }
    }

    return counter;
}

//11) dec to bin +
function decToBin(number){
    let strBit = "";
    let nextNumber = number;

    while(nextNumber > 0){
        
        if(Number.isInteger(nextNumber)){
            strBit += nextNumber % 2;
        }
        else{
            nextNumber = nextNumber - (nextNumber % 2);
            strBit += nextNumber % 2;
        }

        nextNumber /= 2;
    }
    
    let trueString = "";
    for(let i = strBit.length - 2; i >= 0; i--){
        trueString += strBit.charAt(i);
    }
    return trueString;
}
decToBin(4);
//12) 9-10 задания для двумерных массивов +
Array.prototype.doubleEllemSum = function(compare){
    let sum = 0;

    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            if(compare(this[i][j])){
                sum += this[i][j];
            }
        }
    }

    return sum;
}

Array.prototype.doubleEllemCounter = function(compare){
    let counter = 0;

    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            if(compare(this[i][j])){
                counter++;
            }
            
        }
    }

    return counter;
}

//13) summ min for max + 
function sumMinForMax(minNumber, maxNumber){
    let sum = 0;
    if(minNumber >= maxNumber){
        return false;
    }
    else{
        for(let i = minNumber; i <= maxNumber; i++){
            sum += i;
        }
        return sum;
    }
}

function sumMinForMaxMultipleThree(minNumber, maxNumber){
    let sum = 0;
    if(minNumber >= maxNumber){
        return false;
    }
    else{
        for(let i = minNumber; i <= maxNumber; i++){
            if(i % 3 == 0){
                sum += i;
            }
        }
        return sum;
    }
}

function sumMinForMaxPositive(minNumber, maxNumber){
    let sum = 0;
    if(minNumber >= maxNumber){
        return false;
    }
    else{
        for(let i = minNumber; i <= maxNumber; i++){
            if(i > 0){
                sum += i;
            }
        }
        return sum;
    }
}

//14) Среднее значение элементов одномерного и двумерного массивов +
Array.prototype.ellemAverageSum = function(compare){
    let average = 0;
    let sum = 0;
    let counter = 0;

    for(let i = 0; i < this.length; i++){
        if(compare(this[i])){
            sum += this[i];
            counter++;
        }
    }

    average = sum / counter;
    return average;
}

Array.prototype.doubleEllemAverageSum = function(compare){
    let sum = 0;
    let average = 0;
    let counter = 0;

    for(let i = 0; i < this.length; i++){
        for(let j = 0; j < this.length; j++){
            if(compare(this[i][j])){
                sum += this[i][j];
                counter++;
            }
        }
    }

    return average = sum / counter;
}

//15) транспортирование матрицы +
function getTransposeMatrix(matrix){
    let rows = matrix.length;
    let collumns = matrix[0].length;
    let transposeMatrix = [];

    for(let i = 0; i < collumns; i++){
        transposeMatrix[i] = [];
        for(let j = 0; j < rows; j++){
            transposeMatrix[i][j] = matrix[j][i];
        }
    }

    return transposeMatrix;
}
//16 суммирование матриц +
function sumMatrix(firstMatrix, secondMatrix){

    let rows = firstMatrix.length;
    let collumns = firstMatrix[0].length;
    let summuryMatrix = [];

    if(firstMatrix.length > secondMatrix.length || secondMatrix.length > firstMatrix.length){
        return false;
    }
    
    else{
        for(let i = 0; i < rows; i++){
            summuryMatrix[i] = [];
            for(let j = 0; j < collumns; j++){
                summuryMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
            }
        }
        return summuryMatrix;
    }
}

//17) удаление строки если в ней есть 0
function dellMatrixRowWithZero(matrix){
    let rows = matrix.length;
    let collumns = matrix[0].length;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < collumns; j++){
            if(matrix[i][j] === 0){
                matrix.splice(i, 1);
                rows = matrix.length;
            }
        }
    }

    return matrix;
}

function dellMatrixCollumnWithZero(matrix){
    let rows = matrix.length;
    let collumns = matrix[0].length;

    for(let i = 0; i < rows; i++){
        for(let j = 0; j < collumns; j++){
            if(matrix[j][j] === 0){
                matrix[j].splice(j, 0);
                collumns = matrix[0].length;
            }
        }
    }
    return matrix;
}

let testMatrix = [
    [1,0,3],
    [4,5,6],
    [7,8,0],
];
dellMatrixCollumnWithZero(testMatrix);

//bind call
function f(a,b,c){
    return this.a + this.b + a + b + c;
}
let obj = {
    a : 3,
    b : 10,
};

let ff = f.bind(obj, 1, 4, 7);
ff();

function f1(a,b,c){
    return this.a + this.b + a + b + c;
}
let obj1 = {
    a : 3,
    b : 10,
};

let ff1 = f1.call(obj, 1, 4, 7);
ff1();


