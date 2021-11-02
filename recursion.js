'use strict';

//1) анаграмма
function isAnagram(firstWord, secondWord, counter1, counter2, ) {
    counter1 = counter1 || 0;
    counter2 = counter2 || 0;


    
    return false;
}
isAnagram("abcd", "dcba");

//3) количество каждой цифры в числе + 
function creatDigitsArray(number) {
    let numeralsArray = [];

    while ( number ) {
        let numeral = number % 10;
        number = (number - numeral) / 10;
        numeralsArray.unshift(numeral);
    }

    return numeralsArray;
}

function getDigitsCounter(number, counter, result, digitsArray){
    counter = counter || 0;
    digitsArray = digitsArray || creatDigitsArray(number);
    result = result || {};

    if ( counter < digitsArray.length ) {
        if ( result[digitsArray[counter]] ) {
            result[digitsArray[counter]]++;
        }
        else{
            result[digitsArray[counter]] = 1;
        }

        return getDigitsCounter(number, ++counter, result, digitsArray);
    }

    return result;
}

//4) Уникальные слова в предложении + 
function uniqWords(string, wordsArray, counter, uniqWordsCounter){
    wordsArray = wordsArray || string.split(/[\s.,]+/gi);
    uniqWordsCounter = uniqWordsCounter || 0;
    counter = counter || 0;

    if ( counter < wordsArray.length ) {
        for ( let word of wordsArray ) {
            for ( let word2 of wordsArray ) {
                if ( word === word2 ) {
                    ++counter;
                }
            }
    
            if ( counter === 1 ) {
                ++uniqWordsCounter;
            }
    
            return uniqWords(string, wordsArray, ++counter, ++uniqWordsCounter);
        }
    }

    return uniqWordsCounter;
}
uniqWords("asdsf, sdf, sdf, sdf, sdf,wrwe, wr, wer,w fd");

//5) вхождение каждого слова в строку
function getWordsQuantity(string, wordsArray, uniqWordsObject, counter){
    wordsArray = wordsArray || string.split(/[\s.,]+/gi);
    counter = counter || 0;
    uniqWordsObject = uniqWordsObject || {};

    if ( counter < wordsArray.length ) {
        for ( let i = 0; i < wordsArray.length; i++ ) {
            let word = wordsArray[i];
    
            for ( let j = 0; j < wordsArray.length; j++ ) {
                if ( word === wordsArray[j] ) {
                    ++counter;
                    console.log(1);
                }
            }
    
            uniqWordsObject[word] = counter;
            return getWordsQuantity(string, wordsArray, uniqWordsObject, ++counter);
        }
    }

    return uniqWordsObject;
}
getWordsQuantity("asdsf, sdf, sdf, sdf, sdf,wrwe, wr, wer,w fd");

//6) числа фибоначи +
function getFibonacciNumbers(amountNumbers){
    if ( amountNumbers <= 2 ) {
        return [0, 1];
    }

    let fibonacciNumbers = getFibonacciNumbers(amountNumbers - 1);
    let prevNumber = fibonacciNumbers.length - 1;
    let nextNumber = fibonacciNumbers.length - 2;

    fibonacciNumbers.push(fibonacciNumbers[prevNumber] + fibonacciNumbers[nextNumber]);

    return fibonacciNumbers;
}

//8) факториал +
function getFactorial(number){
    if(number == 0 || number == 1) {
        return number;
    }
    
    return number * getFactorial(number - 1); 
}

//9) сумма элементов массива +/-
function arrayEllemSum(array, compare){
    let sum = 0;
    i = i || 0;

    if(i >= array.length){
        return 0;
    }

    sum = arrayEllemSum(array, i + 1);

    return array[i] + sum;
}


//10)посчет элементов в массиве
function arrayEllemCount(array, i){
    
};
arrayEllemCount([1,2,3,4,5]);