/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    let resultArr = [];
    findNums.forEach((value,index,array)=>{
        let currIndex = nums.indexOf(value);
        if(currIndex == nums.length -1){
            resultArr.push(-1)
        }else{
            let flag = false
            for(let i=currIndex+1;i<nums.length;i++){
                if(nums[i] > value){
                    flag = true;
                    resultArr.push(nums[i])
                    return;
                };
            }
            if(!flag){
                resultArr.push(-1)
            }
        }
    })
    return resultArr;
};