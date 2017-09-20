/**
 * @param {number[]} nums
 * @return {string}
 */
	var largestNumber = function(nums) {
        if(nums.length == 1){
            var result = nums[0] + ''
			return result
		}
		var flag_0 = false;
		for(let p=0;p<nums.length;p++){
			nums[p] = nums[p] + ''
			if (nums[p] !== '0'){
				flag_0 = true;
			};
		}
		if (flag_0 == false){
			return '0'
		};
	    for(var i=0;i<nums.length-1;i++){
	      for(var j=0;j<nums.length - i - 1;j++){
	        var result = compareTwoSum(nums[j],nums[j+1])
	        if (!result){
	          var temp;
	          temp = nums[j+1];
	          nums[j+1] = nums[j];
	          nums[j] = temp
	        }
	      }
	    }
	    var resultNum = '';
	    nums.forEach((value,index,array)=>{
	      resultNum += value;
	    })
	    return (resultNum)
	};

	function compareTwoSum(numStr1,numStr2){
	  var flag = false;
	  if((numStr1+numStr2)>(numStr2+numStr1)){
	  	flag = true
	  }
	  return flag;
	}