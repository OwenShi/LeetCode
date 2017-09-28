/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var reg_1 = /^[A-Z]*$/;
    var reg_2 = /^[a-z]*$/;
    var reg_3 = /^[A-Z][a-z]*$/;
    var flag = false
    if(reg_1.test(word)){
        flag = true;
    };
    if(reg_2.test(word)){
        flag = true;
    };
    if(reg_3.test(word)){
        flag = true;
    };
    return flag == true?true:false;
};