/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let num = 0;
    let max = 0;
    nums.forEach((value,index,array)=>{
        if(value == 0){
            if(num > max){
                max = num;
            }
            num = 0;
        }else{
            num ++;
        }
    })
    if(num > max){max = num}; 
    return max;
};