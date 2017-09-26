/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let Arr = [];
    for(let i=0;i<n;i++){
        Arr.push(i+1);
    }
    Arr.forEach((value,index,array)=>{
        if(value%3 == 0 && value%5 == 0){
            array[index] = 'FizzBuzz';
        }else if(value%3 == 0){
            array[index] = 'Fizz';
        }else if(value%5 == 0){
            array[index] = 'Buzz';
        }else{
            array[index] = value + '';
        }
    })
    return(Arr);
};

fizzBuzz(30);