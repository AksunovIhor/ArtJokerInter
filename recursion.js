'use strict';

//1) анаграмма
function isAnnagramma(firstWord, secondWord){
    if(firstWord.length !== secondWord.length){
        return false;
    }

    
}

//3) количество цифр в числе
function numbersCount(number){
    let counter = 0;
    let numeral = 0;

    if(number > 0){
        numeral = numbersCount(number) % 10;
        console.log(numeral);
    }
}
numbersCount(12345);

//6) числа фибоначи
function fibonacciNumbers(amountNumbers){
    let fibNumbers = [0, 1];

    if(amountNumbers === 0 || amountNumbers === 1){
        return amountNumbers;
    }
    else{

    }

}
fibonacciNumbers(7);

//8) факториал
function getFactorial(){
    if(number == 0 || number == 1) {
        return number;
    }
    else {
        return number * getFactorial(number - 1);
    }
}

//9) сумма элементов массива
function arrayEllemSum(array){
    let sum = 0;

    if(array.length){
        sum = array[0] + arrayEllemSum(array.slice(1));
    }
    
    return sum;
};

//10)посчет элементов в массиве
function arrayEllemSum(array){
    let counter = 0;
    let arrLen = array.length;

};
arrayEllemSum([1,2,3,4,5]);