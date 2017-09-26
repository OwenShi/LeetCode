/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
    let sumArr = [];
    let sum = 0;
    ops.forEach((value,index,array)=>{
        switch(value){
            case '+':
                sumArr.push(parseInt(sumArr[sumArr.length - 2]) + parseInt(sumArr[sumArr.length - 1]));
                break;
            case 'D':
                sumArr.push(parseInt(sumArr[sumArr.length - 1]) * 2);
                break;
            case 'C':
                sumArr.pop();
                break;
            default:
                sumArr.push(parseInt(value));
        }
    })
    sumArr.forEach((value)=>{
        sum += value;
    })
    return(sum);
};
