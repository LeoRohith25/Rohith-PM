function countMul(arr){
    const result = {};

    //Loop for 1 to 9
    for (let i = 1; i <= 9; i++){
        let count = 0;

    //For checking each num in the array.
    for(let num of arr){
        if(num % i === 0){
            count ++;
        }
    }

    //For storing the result
    result[i] = count;
    }

    return result;
}

const numbers = [1,2,8,9,12,46,76,82,15,20,30];
const output = countMul(numbers);

console.log(output);