function isInteger(num){
    if(typeof num != 'number') return 'false';
    if(num %1!=0){
        return false;
    }else{
        return true;
    }
}
console.log(isInteger(2.3%1));