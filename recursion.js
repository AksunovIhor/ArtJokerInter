'use strict';

//1) анаграмма
function isAnagram(firstWord, secondWord, i, j, counter1, counter2){
    i = i || 0;
    j = j || 0;
    counter1 = counter1 || 0;
    counter2 = counter2 || 0;

    
};
isAnagram("abcd", "dcba");

//3) количество каждой цифры в числе + 
function getNumeralsCounter(number, counter){
    counter = counter || 0;
    let arrayCreator = number;
    let numeralsArray = [];
    let numeralsArayCounter = {};

    while(arrayCreator){
        let numeral = arrayCreator % 10;
        arrayCreator = (arrayCreator - numeral) / 10;
        numeralsArray.unshift(numeral);
    }
    

    for(let i = 0; i < numeralsArray.length; i++){
        if(counter <= i){
            let numeral = numeralsArray[i];

            if(numeral === numeralsArray[i]){
                getNumeralsCounter(number, ++counter);
            }
            numeralsArayCounter[numeral] = counter;
        }
        counter = 0;
    }

    return numeralsArayCounter;
}
getNumeralsCounter(94503247411);

//4) Уникальные слова в предложении
function uniqWords(string, i, j, counter){
    i = i || 0;
    j = j || 0;
    counter = counter || 0;
    let uniqWordsCounter = 0;
    let wordsArray = string.split(/[\s.,]+/gi);

    if(i < wordsArray.length && j < wordsArray.length){
        let word = wordsArray[i];
        if(word !== wordsArray[j]){
            ++counter;
            console.log(word, wordsArray[j], counter);
        }
        return uniqWords(string, ++i, ++j, counter);
    }
    return counter;
    
}
uniqWords("asdsf, sdf, sdf, sdf, sdf,wrwe, wr, wer,w fd");

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
    
};
arrayEllemCount([1,2,3,4,5]);