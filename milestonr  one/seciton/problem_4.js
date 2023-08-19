function isLGSeven(num){
    if(typeof num != 'number') return 'place Enter Number';
    let different= num-7;
    if(different <7) return different;
    else return num*2;
}
console.log(isLGSeven(15))