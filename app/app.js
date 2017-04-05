function findMax(array)
{
    var max = array[0];
    var check = 0;
    for(var i in array){
        if(Number.isInteger(array[i])){
            if(array[i]>max){
                max = array[i];
            }
        }else{
            check = 1;
        }

    }

    if(check == 0){
        return max;
    }else{
        return false;
    }

}
module.exports = {
    findMax: findMax
};
