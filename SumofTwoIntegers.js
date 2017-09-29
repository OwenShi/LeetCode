/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if (b == 0){
        return a;
    }
    let num_1 = a ^ b;
    let num_2 = (a & b) << 1;
    return getSum(num_1 ,num_2);
};
