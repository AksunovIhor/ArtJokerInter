'use strict';

//1) анаграмма
function isAnagramma(firstWord, secondWord, i, j){
    i = i || 0;
    j = j || 0;
    let counter1 = 0;
    let counter2 = 0;
    
};
isAnagramma("abc", "cba");

//3) количество цифр в числе
function numbersCount(number){
    let counter = 0;
    let numeral = 0;

    if(number){
        numeral = number % 10;
        counter++;
        numbersCount((number - numeral) / 10);
    }
    return counter;
    
}
numbersCount(1234567);

//4) Уникальные слова в предложении
function uniqWords(string, i, j){
    i = i || 0;
    j = j || 0;
    let counter = 0;
    let uniqWordsCounter = 0;
    let wordsArray = string.split(/[\s.,]+/gi);

    if(i >= wordsArray.length && j >= wordsArray.length){
        return false;
    }

    let word = wordsArray[i];
    if(word === wordsArray[j]){
        word === wordsArray[j];
        counter++;
    }
    return counter;
}
uniqWords("asdsf, sdf, sdf, sdf, sdf,wrwe, wr, wer,w fd,");

//6) числа фибоначи +
function getFibonacciNumbers(amountNumbers){
    if(amountNumbers <= 2){
        return [0, 1];
    }

    let fibonacciNumbers = getFibonacciNumbers(amountNumbers - 1);

    fibonacciNumbers.push(fibonacciNumbers[fibonacciNumbers.length - 1] + fibonacciNumbers[fibonacciNumbers.length - 2]);

    return fibonacciNumbers;
}
getFibonacciNumbers(7);

//8) факториал +
function getFactorial(number){
    if(number == 0 || number == 1) {
        return number;
    }
    
    return number * getFactorial(number - 1); 
}

//9) сумма элементов массива +/-
function arrayEllemSum(array, i){
    let sum = 0;
    i = i || 0;

    if(i >= array.length){
        return 0;
    }

    sum = arrayEllemSum(array, i + 1);

    return array[i] + sum;
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