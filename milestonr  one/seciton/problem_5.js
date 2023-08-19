function findingBadData(number){
    if(!Array.isArray(number)) return 'sk';
    let count=0;
    for(let i=0;i<number.length;i++){
        if(number[i]<0) count++;
    }
    return count;
}
let number= [2,-5,-7,-13];
console.log(findingBadData('sk'));