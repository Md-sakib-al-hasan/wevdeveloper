//  function centimeterToMeter(cent){
//     return cent/100;
//  }
//  console.log(centimeterToMeter(5454));

// function paperRequirements(book1,book2,book3){
//     return book1+book2+book3;
// }
// console.log(paperRequirements(100,200,300));

let Name = ['sajid','mamun', 'kamal', 'jubayer bin rased', 'chinnku'];

function bestFriend(name){
     let max=name[0];
    for(let i=0;i<Name.length;i++){
        if(max.length<name[i].length){
            max=name[i];
        }
    }
    return max;
}
console.log(bestFriend(Name));