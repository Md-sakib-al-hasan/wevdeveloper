const itmes=document.getElementsByClassName('item');
console.log(itmes);
for(const v of itmes){
    v.addEventListener('click',function(event){
          console.log(event.target.parentNode);
    })
}