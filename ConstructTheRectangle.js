/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    // if(area == 0){
    //     return[0,0];
    // }else{
    //     var resultArr = [];
    //     for(var i=area;i>0;i--){
    //         if(area % i == 0){
    //             resultArr.push(i);
    //         }
    //     }
    //     console.log(resultArr)
    //     if(resultArr.length % 2 == 0){
    //         return[resultArr[(resultArr.length/2) -1],resultArr[(resultArr.length/2)]]
    //     }else{
    //         return[resultArr[((resultArr.length + 1)/2)-1],resultArr[((resultArr.length + 1)/2)-1]]
    //     }
    // }
    var mid = Math.sqrt(area);
    while (area % mid != 0){
        while (true){
            if(area % mid == 0){
                return [mid,(area/mid)]
            };
            mid --
        }
    }
};