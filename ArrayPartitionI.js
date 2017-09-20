/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
	var sortArr = fastOrder(nums);
	var sum = 0;
	for (let i=0;i<(sortArr.length);i++){
		if(i%2 == 0){
			sum +=sortArr[i]
		}
	}
	return sortArr
};

function fastOrder(arr){
  var len = arr.length;
  if(len < 2){
    return arr;
  };
  var middleIndex = Math.floor(len/2);
  var middle = arr.splice(middleIndex,1);
  var left = [];
  var right = [];
  for (var i=0;i<len - 1;i++){
    if(arr[i] < middle){
      left.push(arr[i]);
    }else{
      right.push(arr[i])
    }
  }
  return fastOrder(left).concat(middle,fastOrder(right));
}

arrayPairSum([1,2,5,4])
