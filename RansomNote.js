/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var ransArr = [...ransomNote];
    var magArr = [...magazine];
    var result = true;
    for(let i=0;i<ransArr.length;i++){
        var flag = false;
        for(let j=0;j<magArr.length;j++){
            if(magArr[j] === ransArr[i]){
                magArr.splice(j,1);
                flag = true;
                break;
            }
        };
        if(flag === false){
            result = false;
            break;
        }
    };
    return result;
};