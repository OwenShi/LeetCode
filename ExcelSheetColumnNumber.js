/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var strArr = [...s];
    var sum = 0;
    strArr.forEach((value,index,array)=>{
        sum += (Math.pow(26,index))*(value.charCodeAt() - 64)
    })
    return(sum);
};

titleToNumber('AA');