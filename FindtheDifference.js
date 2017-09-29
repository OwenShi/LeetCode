/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    let Arr_s = [...s];
    let Arr_t = [...t];
    for(let i=0;i<Arr_s.length;i++){
        for(let k=0;k<Arr_t.length;k++){
            if(Arr_s[i] == Arr_t[k]){
                Arr_t.splice(k,1);
                return;
            }
        }
    }
    console.log(Arr_t)
}
findTheDifference("a","aa")