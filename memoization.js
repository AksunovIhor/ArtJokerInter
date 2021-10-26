'use strict';

//6) числа фибоначи
function getFibonacciNumbers(){
    let cache = {};

    return function memorize(amountNumbers){       
        if(amountNumbers <= 2){
            return [0, 1];
        }

        let result = cache[amountNumbers];
        if(result === undefined){
            result = memorize(amountNumbers - 1);
            cache[amountNumbers] = result;
            console.log(cache);
        }

        return result;
    }
}
let gfn = getFibonacciNumbers();
gfn(7);

//8) факториал
function getFactorial(){
    let cache = {};

    return function memorize(number){
        if(number === 0 || number === 1){
            return number;
        }
        
        let result = cache[number];

        if(result === undefined){
            result = memorize(number - 1);
            cache[number] = result;
        }

        return number * result;
    }
};

//9) сумма элементов массива
function arrayEllemSum(){
    let cache = {};

    return function memorize(array, i){
        i = i || 0;

        if(i >= array.length){
            return 0;
        }

        let result = cache[array];
        if(result === undefined){
            result = memorize(array, i + 1);
            cache[array] = result;
        }
        return array[i] + result;
    }

    
};