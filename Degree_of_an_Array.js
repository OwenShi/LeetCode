/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    var mapObj = {}
    var maxN = {
        num:0,
        maxIndex:0,
        minIndex:0
    };
    for(let i=0;i<nums.length;i++){
        if(!mapObj[nums[i]]){
            let temp = {
                num:1,
                minIndex:i,
                maxIndex:i
            }
            mapObj[nums[i]] = temp;
        }else{
            mapObj[nums[i]].num ++;
            mapObj[nums[i]].maxIndex = i;
        }
        if(mapObj[nums[i]].num > maxN.num){
            maxN.num = mapObj[nums[i]].num;
            maxN.minIndex = mapObj[nums[i]].minIndex;
            maxN.maxIndex = mapObj[nums[i]].maxIndex;
        }else if(mapObj[nums[i]].num == maxN.num){
            if((mapObj[nums[i]].maxIndex-mapObj[nums[i]].minIndex) < (maxN.maxIndex - maxN.minIndex)){
                maxN.num = mapObj[nums[i]].num;
                maxN.minIndex = mapObj[nums[i]].minIndex;
                maxN.maxIndex = mapObj[nums[i]].maxIndex;
            }
        }
    };
    return(maxN.maxIndex - maxN.minIndex + 1)
};

findShortestSubArray([1,2,1,2,4,5,4,5,7,8,4,5,9,8,6,8,9,4,2])