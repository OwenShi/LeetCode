/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var strArr = s.split(' ');
    var result = '';
    strArr.forEach((value,index,array)=>{
    	var subStr = value.split('').reverse().join('');
    	index == 0?result += subStr:result += ' ' + subStr;
    })
    return result;
};
