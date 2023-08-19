var shoppingCart = {
    books: 3,
    sunglass:1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shopes:2,
}
// const key = Object.keys(shoppingCart);
// console.log(key);
// const val =Object.values(shoppingCart);
// for(var i=0;i<key.length;i++){
//    console.log(key[i]," ",shoppingCart[key[i]]);
// }
// for(var sk in shoppingCart){
//     console.log(sk);
// }
var sk= Object.entries(shoppingCart);
console.log(sk);