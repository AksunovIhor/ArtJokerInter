'use strict';

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
            console.log("memo");
        }

        return array[i] + result;
    }
};
let ae = arrayEllemSum();
ae([1,2,3,4,5]);