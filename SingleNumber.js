/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a,b)=>{return a-b})
    var thisNum = 0;
    nums.forEach((value,index,array)=>{
        if(value !== array[index-1] && value !== array[index+1]){
            thisNum = value;
        }
    })
    return thisNum;
};
