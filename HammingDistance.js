/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var x_2 = x.toString(2)
    var y_2 = y.toString(2)
    var num = 0
    if (x_2.length >= y_2.length){
    	var diff =  x_2.length -  y_2.length
    	for(let i=0;i<diff;i++){
    		y_2 = '0' + y_2
    	}
    }else{
    	var diff =  y_2.length -  x_2.length
    	for(let i=0;i<diff;i++){
    		x_2 = '0' + x_2
    	}
    }
    for(let i=0;i<x_2.length;i++){
    	if(x_2[i] !== y_2[i]){
    		num ++
    	}
    }
    return num
};
