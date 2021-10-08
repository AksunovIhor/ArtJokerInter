'use strict';

//1) Анаграмма + 
function isAnagramma(firstWord, secondWord) {
    if (firstWord.length !== secondWord.length) {
        return false;
    };

    for (let i = 0; i < firstWord.length; i++) {
        let char1 = word1[i];
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
    let baseNumber = 0;
    while(number) {
        numeral = number % 10;
        baseNumber = number;
        number = (number - numeral) / 10;
        counter++;
    }
    return counter;
}

//4) уникальные слова в предложении 
    let str = "kol lok lok fddc cdda asd adas adas";
    function unicWords(string){
        let counter = 0;
        let wordArray = string.split(" ");
        console.log(wordArray);
        for(let i = 0; i < wordArray.length; i++){
            let someWord = wordArray[i];
            if(someWord !== wordArray[i]){
                counter++;
            }
        }
        return counter;
    }
    unicWords(str);

//5) вхождение каждого слова в строку
let someStr = "frt, ad, asd, rwefs, frt, frt, sads, asd, 43rfw. asd";
function wordsCounter(string){
    let wordsArray = string.toLowerCase().split(" ");
    let word = wordsArray[0];
    let counter = 0;
    console.log(wordsArray);
    for(let j = 0; j <= wordsArray.length - 1; j++){
        word = wordsArray[j];
        for(let i = 0; i <= wordsArray.length - 1; i++){
            if(word == wordsArray[i]){
                counter++;
            }
        }
    }
}
wordsCounter(someStr);

//6) вывод чисел фибоначи + 
function showFibonacciNumbers(amountNumbers){
    let fibNumbers = [0, 1];

    for(let i = 2; i < amountNumbers; i++){
        let prevNumber = fibNumbers[i - 1];
        let nextNumber = fibNumbers[i - 2];
        fibNumbers.push(prevNumber + nextNumber);
    }

    return fibNumbers;
}

//7)площадь и периметр круга, треугольника, квадрата + 
function Rectangle(width, height){
    this.width = width;
    this.height = height;
}
/*class Rectangle2{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    /** 
     * @param {number} valueWidth
     
    set setWidth(valueWidth){
        this.width = valueWidth;
    }
    
    /**
     * @param {any} valueHeight
    
    set setHeight(valueHeight){
        this.height = valueHeight;
    }

    get getRectSquare(){
        return this.width * this.height;
    }
}*/

Rectangle.prototype.square = function(){
    return this.width * this.height;
}
Rectangle.prototype.perimeter = function(){
    return (this.width + this.height) * 2;
}

function Triangle(aSide, bSide, cSide){
    this.aSide = aSide;
    this.bSide = bSide;
    this.cSide = cSide;
}
Triangle.prototype.square = function(){
    let halfPerimeter = (this.aSide + this.bSide + this.cSide) / 2;
    return Math.sqrt(halfPerimeter * (halfPerimeter - this.aSide) * (halfPerimeter - this.bSide) * (halfPerimeter - this.cSide));
}
Triangle.prototype.perimeter = function(){
    return this.aSide + this.bSide + this.cSide;
}

function Circle(radius){
    this.radius = radius;
}
Circle.prototype.square = function(){
    return Math.PI * (this.radius * this.radius);
}
Circle.prototype.perimeter = function(){
    return 2 * Math.PI * this.radius;
}

//8) факториал +
function getFactorial(number){
    if(number == 0 || number == 1) {
        return number;
    }
    else {
        return number * getFactorial(number - 1);
    }
}

//9) сумма элементов массива +
Array.prototype.ellemSum = function(compare){
    let sum = 0;
    let counter = 0;
    let arrayLenth = this.length;

    for(let i  = 0; i < arrayLenth; i++){
        if(compare(this[i])){
            sum += this[i];
        }
    }

    return sum;
}

//10) подсчет элементов в массиве +
Array.prototype.ellemCounter = function(compare){
    let counter = 0;
    console.log(this.length);
    for(let i = 0; i < this.length; i++){
        if(compare(this[i])){
            counter++;
            console.log(this.length);
        }
    }

    return counter;
}
let testArray3 = [1,2,3,4,5,6,7,8,9,0,0,10];
testArray3.ellemCounter(() => ({}));

//11) dec to bin
function decToBin(number){
    let binStr = null;

    if(number != 0){
        while(number > 0){
            let c = number;
            console.log(c);
        }
    }
}
decToBin(15);

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
            if(compare(this[i][j]) || compare(this[i][j] == 0)){
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

//14) Среднее значение элементов одномерного и двумерного массивов
Array.prototype.ellemAverageSum = function(compare){
    let average = 0;
    let sum = 0;
    let arrayLenth = this.length;

    for(let i = 0; i < arrayLenth; i++){
        if(compare(this[i])){
            sum += this[i];
        }
    }

    average = sum / arrayLenth;
    return average;
}
let testArray2 = [1,2,3,4,5,6,7,8,9,0,0,10];
testArray2.ellemAverageSum((value => value));


function getDoubleArrAverage(stroke, collumn){
    let average = 0;
    let sum = 0;
    let counter = 0;
    let matrix = [];

    for(let i = 0; i <= stroke-1; i++){
        matrix[i] = [];
        for(let j = 0; j <= collumn-1; j++){
            matrix[i][j] = Math.floor(Math.random() * 10);
            sum += matrix[i][j];
            counter++;
        }
    }

    average = sum / counter;
    return average;
}

function getEvenDoubleArrAverage(stroke, collumn){
    let average = 0;
    let sum = 0;
    let counter = 0;
    let matrix = [];
    for(let i = 0; i <= stroke-1; i++){
        matrix[i] = [];
        for(let j = 0; j <= collumn-1; j++){
            matrix[i][j] = Math.floor(Math.random() * 10);
            if(matrix[i][j] % 2 == 0){
                sum += matrix[i][j];
                counter++;
            }
        }
    }
    average = sum / counter;
    return average;
}

function getNotEvenDoubleArrAverage(stroke, collumn){
    let average = 0;
    let sum = 0;
    let counter = 0;
    let matrix = [];
    for(let i = 0; i <= stroke-1; i++){
        matrix[i] = [];
        for(let j = 0; j <= collumn-1; j++){
            matrix[i][j] = Math.floor(Math.random() * 10);
            if(matrix[i][j] % 2 != 0){
                sum += matrix[i][j];
                counter++;
            }
        }
    }
    average = sum / counter;
    return average;
}

//15) transport matrix +
function getTransposeMatrix(matrix){
    let m = matrix.length;
    let n = matrix[0].length;
    let transposeMatrix = [];

    for(let i = 0; i < n; i++){
        transposeMatrix[i] = [];
        for(let j = 0; j < m; j++){
            transposeMatrix[i][j] = matrix[j][i];
        }
    }

    return transposeMatrix;
}
//16 суммирование матриц +
function summMatrix(firstMatrix, secondMatrix){
    let m = firstMatrix.length;
    let n = firstMatrix[0].length;
    let newMatrix = [];

    if(firstMatrix.length > secondMatrix.length || secondMatrix.length > firstMatrix.length){
        return false;
    }
    
    else{
        for(let i = 0; i < m; i++){
            newMatrix[i] = [];
            for(let j = 0; j < n; j++){
                newMatrix[i][j] = firstMatrix[i][j] + secondMatrix[i][j];
            }
        }
        return newMatrix;
    }
}

let testMatrix = [
    [1,2,3],
    [4,5,6],
    [7,8,0]
]
//17) delete string with 0
function dellMatrixStringWithZero(matrix){
    let m = matrix.length;
    for(let i = 0; i < m; i++){
        for(let j = 0; j < m; j++){
            if(matrix[i][j] == 0){
                matrix[i][j] == 1;
            }
        }
    }
    console.log(matrix);
}
dellMatrixStringWithZero(testMatrix);



//sort
function bubbleSort(array){
    if(array instanceof Array){
        for(let i = 0; i < array.length; i++){
            for(let j = i + 1; j < array.length; j++){
                if(array[i] > array[j]){
                    let curretNumber = array[i];
                    array[i] = array[j];
                    array[j] = curretNumber;
                }
            }
        }
        return array;
    }
}
bubbleSort([1,5,3,6,7,4,3,2,1,1,4,5,34,5,434,535,34,53,3,4,5,3]);

function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let minValue = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minValue]){
                minValue = j;
            }
            if(minValue != i){
                let currentNumber = array[i];
                array[i] = array[minValue];
                array[minValue] = currentNumber;
            }
        }
    }
    return array;
}
selectionSort([1,5,3,6,7,4,3]);

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