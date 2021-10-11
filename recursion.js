'use strict';

//1) анаграмма
function isAnnagramma(firstWord, secondWord){
    if(firstWord.length !== secondWord.length){
        return false;
    }


}

//6) числа фибоначи
function fibonacciNumbers(amountNumbers){
    let fibNumbers = [0, 1];

    if(amountNumbers > 0){
        
        fibNumbers.push(fibNumbers[0] + fibNumbers[1]);
        fibonacciNumbers(--amountNumbers);
    }

    return fibNumbers;
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

    if(array.length ){

    }
}

