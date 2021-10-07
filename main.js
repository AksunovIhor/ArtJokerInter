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
function getArrayEllemSum(array){
    let sum = 0;
    for(let i  = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}

function getArrayEllemSumAliqoutTwo(array){
    let sum = 0;

    for(let i  = 0; i < array.length; i++){
        if(array[i] % 2 == 0){
            sum += array[i];
        }
    }

    return sum;
}

function getArrayEllemSumAliquotThree(array){
    let sum = 0;

    for(let i  = 0; i < array.length; i++){
        if(array[i] % 3 == 0){
            sum += array[i];
        }
    }

    return sum;
}

function getNotEvenPositiveArrayEllem(array){
    let sum = 0;

    for(let i  = 0; i < array.length; i++){
        if(array[i] % 2 != 0 && array[i] > 0){
            sum += array[i];
        }
    }

    return sum;
}

//10) подсчет элементов в массиве +
function getAmountArrayZeroEllem(array){
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] == 0){
            counter++;
        }
    }
    return counter;
}

function getAmountArrayNegativeEllem(array){
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0){
            counter++;
        }
    }
    return counter;
}

function getAmountArrayZeroEllem(array){
    let counter = 0;

    for(let i = 0; i < array.length; i++){
        if(array[i] >= 0){
            counter++;
        }
    }

    return counter;
}

function getAmountArrayZeroEllem(array){
    let counter = 0;
    for(let i = 0; i < array.length; i++){
        let flag = true;
        for(let j = 2; j < i; j++){
            if(array[i] % j == 0){
                flag = false;
                break;
            }
        }

        if(flag == true){
            console.log(array[i]);
            counter++;
        }
    }

    return counter;
}

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

let testMatrix2 = [
    [1,2,3],
    [4,5,6],
    [7,8,0]
]
//12) 9-10 задания для двумерных массивов
function getDoubleArraySum(matrix){
    let sum = 0;
    for(let i = 0; i < matrix[0].length; i++){
        matrix[i] = [];
        for(let j = 0; j < matrix.length; j++){
            sum += matrix[i][j];
        }
    }
    console.log(matrix);

    return sum;
}
getDoubleArraySum(testMatrix2);


//13) summ min for max+
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

//14) average arr and double arr+
function getArrAverage(array){
    let average = 0;
    let sum = 0;

    for(let i = 0; i <= array.length-1; i++){
        sum += array[i];
    }

    average = sum / array.length;
    return average;
}

function getEvenArrAverage(array){
    let average = 0;
    let sum = 0;
    let counter = 0;

    for(let i = 0; i <= array.length-1; i++){
        if(array[i] % 2 == 0){
            sum += array[i];
            counter++;
        }
    }

    average = sum / counter;
    return average;
}

function getNotEvenArrAverage(array){
    let average = 0;
    let sum = 0;
    let counter = 0;

    for(let i = 0; i <= array.length-1; i++){
        if(array[i] % 2 != 0){
            sum += array[i];
            counter++;
        }
    }

    average = sum / counter;
    return average;
}

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
            for(let j = 0; j < array.length; j++){
                if(array[j] >= array[j + 1]){
                    let curretNumber = array[j];
                    array[j] = array[j + 1];
                    array[j + 1] = curretNumber;
                }
            }
        }
        return array;
    }
}
bubbleSort([1,5,3,6,7,4,3]);

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