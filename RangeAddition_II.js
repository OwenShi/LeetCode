/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
    var row = 0;
    var column = 0;
    if(ops.length == 0){
        return(m*n);
    }else{
        for(let i=0;i<ops.length;i++){
            if(i == 0){
                row = ops[i][0];
                column = ops[i][1];
            }else{
                if(ops[i][0]<row){
                    row = ops[i][0];
                };
                if(ops[i][1]<column){
                    column = ops[i][1]
                }
            }
        }
        return(row*column)
    }
}
maxCount(5,5,[[2,2],[3,5]])