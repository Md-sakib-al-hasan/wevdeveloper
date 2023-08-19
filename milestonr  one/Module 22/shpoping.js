const phones = [ 
    {name: 'samsung',camera: 12,Storage:'32gb',price: 3600,color: 'silver'},
    {name: 'walton',camera: 12,Storage:'32gb',price: 22000,color: 'silver'},
    {name: 'iphone',camera: 12,Storage:'32gb',price: 82000,color: 'silver'},
    {name: 'xaomi',camera: 12,Storage:'32gb',price: 3600,color: 'silver'},
    {name: 'Oppo',camera: 12,Storage:'32gb',price: 5200,color: 'silver'},
    {name: 'Nokia',camera: 12,Storage:'32gb',price: 44,color: 'silver'},
    {name: 'HTc',camera: 12,Storage:'32gb',price: 62000,color: 'silver'},

];
function cheapestphone(phones){
    let chepeap =phones[0];
    for(let i=0;i<phones.length;i++){
         if(chepeap.price >phones[i].price){
            chepeap=phones[i];
         }
         
    }
    return chepeap;
}

const mySlection = cheapestphone(phones);
console.log("Mobile Name: "+mySlection.name+"  "+"Price: "+mySlection.price)