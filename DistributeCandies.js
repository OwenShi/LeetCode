/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    let subLen = candies.length/2;
    let mainArr = [...new Set(candies)]
    return mainArr.length >= subLen?subLen:mainArr.length
};

