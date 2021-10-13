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
}

/*let obj = {
    a: "123",
    b: "456",
};

let cache = new Map();
cache.set(obj, true);

console.log(cache);*/
