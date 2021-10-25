'use strict';

//1) анаграмма
function isAnagramma(firstWord, secondWord, i, j){
    i = i || 0;
    j = j || 0;
    let counter1 = 0;
    let counter2 = 0;

    if(firstWord.length !== secondWord.length){
        return false;
    }
    else{
        let char1 = firstWord[i];
    let char2 = firstWord[j];
    if(char1 === char2){
        counter1++;
    }
    char2 = secondWord[j];
    if(char1 === char2){
        counter2++;
    }
    isAnagramma(firstWord, secondWord, i++, j++);
    }
    
    if(counter1 !== counter2){
        return false;
    }
    return true;
    
}
isAnagramma("abc", "cba");

//3) количество цифр в числе
function numbersCount(number){
    let counter = 0;
    let numeral = 0;

    if(number){
        numeral = number % 10;
        let result = numbersCount(number - numeral);
        counsole.log(result);
        number = result / 10;
        counter++;
    }
    return counter;
}
numbersCount(123);

function countDigits(n) {
    let counter = 0;
    for(let i = 0; n > 1; i++) {
       n /= 10;
       console.log(n);
       counter++;
    }
    return counter;
 };
 countDigits(123455);

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
function getFactorial(number){
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

/*Array.prototype.ellemSum = function(compare, i){
    let sum = 0;
    i = i || 0;

    if(i >= this.length){
        return 0;
    }

    if(compare(this[i])){
        sum = compare(this[i], i + 1);
        return this[i] + sum;
    }
}
let arr = [1,2,3,4,5,6,7,8,9,10];
arr.ellemSum(() => ({}));*/


//10)посчет элементов в массиве
function arrayEllemCount(array, i){
    let counter = 0;
    i = i || 0;

    if(array instanceof Array){
        if(counter >= array.length){
            return 0;
        }
        else{
            
        }
    }

};
arrayEllemCount([1,2,3,4,5]);