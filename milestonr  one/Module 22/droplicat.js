const  Name=['abul', 'babul','cabul','abul', 'babul','cabul','abul', 'babul','cabul',];
const Unique= [];
 
for( let i=0;i<Name.length;i++){
    if(Unique.includes(Name[i])== false){
        Unique[i]=Name[i];
    }
}
console.log(Unique);