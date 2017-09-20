/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
    var xDis = 0;
    var yDis = 0;
    var disArr = moves.split('')
    disArr.forEach((value,index,array)=>{
    	switch(value){
    		case 'L':
    			xDis --
    			break
    		case 'R':
    			xDis ++
    			break
    		case 'U':
    			yDis ++
    			break
    		case 'D':
    			yDis --
    			break
    	}
    })
    if(xDis == 0 && yDis == 0){
    	return true
    }else{
    	return false
    }
};