function midGame(num){
    if(typeof num != 'number' || num<0) return "Enter_your_carret_answer";
     return (((num*3)+10)/2)-5;
}
console.log(midGame(5))