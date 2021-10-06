'use strict';

//1) Anagramma
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
};
//3) количество цифр в числе
function numbersCount(number){
    let numeral = 0;
    let counter = 0;
    while(number){
        numeral = number % 10;
        number = (number - numeral) / 10;
        if(numeral == number){
            counter++;
        }
        console.log(`${numeral} and ${counter}`);
    }
}

/*function getSumNumber(num) {
        let sum = 0, tmp = 0;
        while (num) {
            tmp = num % 10;
            num = (num - tmp) / 10;
            sum += tmp;
            console.log(num);
        }
        
    }
    alert(getSumNumber(2610));

function sds(number){
    let tmp = number % 10;
    //number = (number - tmp) / 10;
    console.log(tmp);
}
sds(123);*/
numberCount(123);

//4) уникальные слова в предложении
    let str = "kol lok lok fddc cdda asd adas adas";
    function unicWords(string){
        let counter = 0;
        let wordArray = string.split(" ");
        for(let i = 0; i <= wordArray.length; i++){
            let someWord = wordArray[i];
            if(someWord != wordArray[i + 1]){
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

//6) вывод чисел фибоначи
function fibonacciNumbers(counter){
    let firstNumber = 0;
    let secondNumber = 1;
    let summ = firstNumber + secondNumber;
    counter--;
    return summ + fibonacciNumbers(summ);
}
fibonacciNumbers(5);

//7)площадь и периметр круга, треугольника, квадрата 
let rectangle = {
    width : 30,
    height: 40,
    
}

//8) факториал
function getFactorial(number){
    if(number == 0 || number == 1) {
        return number;
    }
    else {
        return number * getFactorial(number - 1);
    }
}
getFactorial(5);

//9) array element work
class arrayElementsSumm{
    constructor(array){
        this.array = array
    }

    set setArray(value){
        this.array = value;
    }

    get getAllEllements(){
        let summ = 0;
        for(let i = 0; i <= this.array.length-1; i++){
            summ += this.array[i];
        }
        return summ;
    }
    get getMultipleOfTwo(){
        let summ = 0;
        for(let i = 0; i <= this.array.length-1; i++){
            if(this.array[i] % 2 == 0){
                summ += this.array[i];
            }
        }
        return summ;
    }
    get getPositiveAncounteble(){
        let summ = 0;
        for(let i = 0; i <= this.array.length; i++){
            if(this.array[i] > 0 && this.array[i] % 2 != 0){
                summ += this.array[i];
            }
        }
        return summ;
    }
}
let someArr = [1,2,3,4,5,6,7,8,9,10];
let someArr2 = [1,2,3,-4,-5,6,7,8,9,10];
let aes = new arrayElementsSumm(someArr2);
/*console.log(aes.getAllEllements);
console.log(aes.getMultipleOfTwo);*/
console.log(aes.getPositiveAncounteble);

//10) count arr allem
class arrayElementsCount{
    constructor(array){
        this.array = array;
    }
    set setArray(value){
        this.array = value;
    }

    get getCountZeroEllem(){
        let counter = 0;
        for(let i  = 0; i <= this.array.length-1; i++){
            if(this.array[i] == 0){
                counter++;
            }
        }
        return counter;
    }
    get getNegattiveAllements(){
        let counter = 0;
        for(let i  = 0; i <= this.array.length-1; i++){
            if(this.array[i] < 0){
                counter++;
            }
        }
        return counter;
    }
    get getPositiveAllements(){
        let counter = 0;
        for(let i  = 0; i <= this.array.length-1; i++){
            if(this.array[i] > 0){
                counter++;
            }
        }
        return counter;
    }
    get getSimpleEments(){
        let counter = 0;
        for(let i  = 0; i <= this.array.length-1; i++){
            let curretNumber = this.array[i];
            if(curretNumber % this.array[i+1] != 0){
                return false;
            }
            else counter++;
        }
        return counter;
    }
    
}
let testArr = [1,2,3,4,5,6,7,8,9,10];
let aecount = new arrayElementsCount(testArr);
aecount.getSimpleEments;

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

//12) double array 
function matrixGenerator(stroke, collumn){
    let mattrix = [];
    for(let i = 0; i <= stroke-1; i++){
        mattrix[i] = [];
        for(let j = 0; j <= collumn-1; j++){
            mattrix[i][j] = Math.floor(Math.random() * 10);
        }   
    }
    console.log(mattrix);
}

class doubleArray{
    constructor(matrix){
        this.matrix = matrix;
    }
    set setMatrix(value){
        this.matrix = value;
    }

    get getSumMatrixEllem(){
        let summ = 0;
        summ += this.matrix;
    }
}
let dbm = new doubleArray(matrixGenerator(3,3));
dbm.getSumMatrixEllem;

//13) summ min for max
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

//14) average arr and double arr
let averArr = [1,2,3,4,5,6,7,8,9,10];
function getArrAverage(array){
    let average = 0;
    let sum = 0;
    for(let i = 0; i <= array.length-1; i++){
        sum += array[i];
        console.log(sum);
    }
    average = sum / array.length;
    return average;
}
getArrAverage(averArr);

function getEvenArrAverage(array){
    let average = 0;
    let sum = 0;
    let counter = 0;
    for(let i = 0; i <= array.length-1; i++){
        if(array[i] % 2 == 0){
            sum += array[i];
            counter++;
        }
        console.log(sum);
    }
    average = sum / counter;
    return average;
}
getEvenArrAverage(averArr);

function getNotEvenArrAverage(array){
    let average = 0;
    let sum = 0;
    let counter = 0;
    for(let i = 0; i <= array.length-1; i++){
        if(array[i] % 2 != 0){
            sum += array[i];
            counter++;
        }
        console.log(sum);
    }
    average = sum / counter;
    return average;
}
getNotEvenArrAverage(averArr);

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
    console.log(matrix);
    average = sum / counter;
    return average;
}
getDoubleArrAverage(3,3);

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
    console.log(matrix);
    average = sum / counter;
    return average;
}
getEvenDoubleArrAverage(3,3);

function getEvenDoubleArrAverage(stroke, collumn){
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
    console.log(matrix);
    average = sum / counter;
    return average;
}
getEvenDoubleArrAverage(3,3);

//15) transport matrix
function matrixTransport(matrix){

    let m = matrix.length;
    let n = matrix[0].length;
    let transpMatrix = [];

    if(matrix.length === 1 || matrix.length === 0){
        return matrix;
    }

    for(let i = 0; i < n; i++){
        transpMatrix[i] = [];
        for(let j = 0; j < m; j++){
            transpMatrix[i][j] = matrix[j][i];
        }
    }

    return transpMatrix;
}

//16 summ matrix
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



//рекурсии
/*function f(min, max){
    let sum = 0;
    if(++min <= max){
        sum += f(min, max) + min;
    }
    return sum;
}
f(0, 10);*/

/*function fr(arr, index){
    index = index || 0;
    let s = 0;
    if(index < arr.length){
        s = arr[index] + fr(arr, ++index);
    }
    return s;
}
fr([1,2,3,4,5,6,7,8,9]);*/


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