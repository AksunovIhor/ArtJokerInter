//сортировка
function bubbleSort(array){
    if(array instanceof Array){
        for(let i = 0; i < array.length; i++){
            for(let j = i + 1; j < array.length; j++){
                if(array[i] > array[j]){
                    let curretNumber = array[i];
                    array[i] = array[j];
                    array[j] = curretNumber;
                }
            }
        }
        return array;
    }
}
bubbleSort([1,5,3,6,7,4,3,2,1,1,4,5,34,5,434,535,34,53,3,4,5,3]);

function selectionSort(array){
    for(let i = 0; i < array.length; i++){
        let minValue = i;
        for(let j = i + 1; j < array.length; j++){
            if(array[j] < array[minValue]){
                minValue = j;
            }
            if(minValue != i){
                let currentNumber = array[i];
                array[i] = array[minValue];
                array[minValue] = currentNumber;
            }
        }
    }
    return array;
}
selectionSort([1,5,3,6,7,4,3]);