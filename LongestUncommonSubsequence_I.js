/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
// var findLUSlength = function(a, b) {
//     let longStr = '';
//     let shortStr = '';
//     // a.length > b.length?(longStr = a,shortStr = b):(longStr = b,shortStr = a);
//     a.length > b.length?(()=>{longStr = a;shortStr = b})():(()=>{longStr = b;shortStr = a})();
//     let max = 0;
//     let i = 0;
//     for(letter of longStr){
//         if(shortStr.indexOf(letter) == -1){
//             i++;
//         }else{
//             if(i>max){
//                 max = i;
//                 i = 0;
//             }
//         }
//     }
//     if(max < i){         //判断longStr的最后一位字符串不属于shortStr的情况
//         max = i;
//     };
//     if(max == 0){
//         max = -1;
//     }
//     console.log(max);
// };

//todo注意理解题意 给定两个字符串，计算其“最长不公共子序列”。最长不公共子序列是指：两字符串中某一个的子序列，该子序列不是另一个字符串的子序列，并且长度最长。

// 子序列是指从一个序列中删除一些字符，剩余字符顺序保持不变得到的新序列。任何字符串都是其本身的子序列，空串不属于任意字符串的子序列。

// 返回最长不公共子序列，若不存在，返回-1。

var findLUSlength = function(a, b) {
    if(a == b){
        return -1;
    }else{
        return a.length>b.length?a.length:b.length;
    }
};
