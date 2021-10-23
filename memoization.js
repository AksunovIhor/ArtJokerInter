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

//9) 
function arrayEllemSum(array){
    let cache = {};

    /*return function memorize(array){
        let result = cache[array];
    }*/

    let result = cache[array];
    return result;
};

arrayEllemSum([1,2,3,4,5]);
