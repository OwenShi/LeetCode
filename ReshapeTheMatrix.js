/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var sumArr = [];
    var resultArr = [];
    nums.forEach((value,index,array)=>{
        sumArr = sumArr.concat(value);
    })
    if (sumArr.length !== r*c){
        return nums;
    }else{
        var index = 0;
        for(let i=0;i<r;i++){
            var temp = [];
            for(let k=0;k<c;k++){
                temp.push(sumArr[index]);
                index ++;
            };
            resultArr.push(temp);
        };
        return resultArr;
    }
};