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
function fibonacciNumbers(amountNumbers, i){
    let fibNumbers = [0, 1];
    i = i || 2;

    if(amountNumbers === 0 || amountNumbers === 1){
        return amountNumbers;
    }
    
    if(i >= amountNumbers){
        return 0;
    }
    else{
        let res = fibonacciNumbers(amountNumbers, i + 1);
        fibNumbers.push(res + fibNumbers[i - 1]);
        return fibNumbers;
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
function arrayEllemSum(array, i){
    let sum = 0;
    i = i || 0;

    if(i >= array.length){
        return 0;
    }
    else{
        sum = arrayEllemSum(array, i + 1);
        return array[i] + sum;
    }
};
arrayEllemSum([1,2,3,4,5,6,7,8,9,10]);

//10)посчет элементов в массиве
function arrayEllemCount(array, i){
    let counter = 0;
    i = i || 0;

    if(counter >= array.length){
        return 0;
    }
    else{
        arrayEllemCount(array, i + 1);
        counter++;
        return counter;
    }

};
arrayEllemCount([1,2,3,4,5]);