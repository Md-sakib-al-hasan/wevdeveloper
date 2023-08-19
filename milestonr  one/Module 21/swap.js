let a= 10;
let b=20;
const tmp= a;
 a=b;
 b=tmp;
 console.log(a);
 [a,b]=[b,a];
 console.log(a);