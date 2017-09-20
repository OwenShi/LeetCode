/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
	//填充进数组进行转换
	var temp = num.toString(2);
	var len = temp.length;
	var numArr = [];
	for(let k=0;k<len;k++){
		numArr.push(temp[k]);
	}
	var sum = 0;
	numArr.forEach((value,index,array)=>{
		if(value == '0'){
			array[index] = '1';
		}else{
			array[index] = '0'
		}
	})
	numArr.reverse()
	numArr.forEach((value,index,array)=>{
		sum += array[index] * Math.pow(2,index);
	})
	return(sum)
};
