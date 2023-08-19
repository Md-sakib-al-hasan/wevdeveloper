// var sakib = {
//     name: 'sk',
//     year:20,
//     semeter:5
// }
// sakib.name = "sakib";
// console.log(sakib);

var computer = {
    brand: 'Asus',
    mouse: '4tach',
    mousen: 5,
    kebord: '4tach',
    keybordn: 4,
    num: function(){
    return this.keybordn+this.mousen;   
    }
}
console.log(computer.brand);
console.log(computer['mouse']);
console.log(computer.num());
var poperties = Object.keys(computer)
console.log(poperties);
computer['mouse'] = 's';
console.log(computer);