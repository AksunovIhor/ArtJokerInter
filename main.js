'use strict';

let str1 = "rga";
let str2 = "agr";

function bubleSort(variable){
    let sortArray = variable.toLowerCase().split();
    for(let i = 0; i <= sortArray.length; i++){
        if(sortArray[i] > sortArray[i + 1]){
            let curretNumber = sortArray[i];
            let nextNumber = sortArray[i + 1];
            sortArray[i] = nextNumber;
            sortArray[i + 1] = curretNumber;    
        }
    } 
}

//1) анаграмма
function anogramm(firstWord, secondWord){
    if(firstWord.length !== secondWord.length){
        return false;
    }
    for(let i = 0; i <= firstWord.length; i++){
        let c = firstWord[i];
        let counter1 = 0;
        let counter2 = 0;

        for(let j = 0; j <= firstWord.length; j++){
            let b = firstWord[j];
            if(c === b){
                counter1++
            }
            b = secondWord[j];
            if(c === b){
                counter2++;
            }
            if(counter1 === counter2){
                return true;
            }
        }
    }
};
anogramm(str1,str2);

//количество цифр в числе
function numberCount(number){
    let numberToString
}
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
        console.log(`В строке ${counter} уникальных слов.`);
    }
    unicWords(str);

//5) вхождение каждого слова в строку
let someStr = "frt, ad, asd, rwefs, frt, frt, sads, asd, 43rfw. asd";
function wordsCounter(string){
    let wordsArray = string.toLowerCase().split(" ");
    let word = wordsArray[0];
    let counter = 0;
    console.log(wordsArray);
    for(let j = 0; j <= wordsArray.length; j++){
        word = wordsArray[j];
        for(let i = 0; i <= wordsArray.length; i++){
            if(word == wordsArray[i]){
                counter++;
            }
        }
    }
    console.log(`${word} in str = ${counter}`);
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
class Circle{
    cunstructor(radius, mail);
}
class Rectangle{

}

//8) факториал
function getFactorial(number){
    if(number == 0 || number == 1) return number;
    else return number * getFactorial(number - 1);
};
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
let arrMinMax = [4,3,4,5,12,3,5,6,71,2,3,4];
function sumMinForMax(array, minNumber, maxNumber){
    let sum = 0;
    for(let i = 0; i <= array.length; i++){
        if(i == minNumber && i <= maxNumber){
            sum += array[i];
            console.log(sum);
        }
    }
    return sum;
}
sumMinForMax(arrMinMax, 3, 6);