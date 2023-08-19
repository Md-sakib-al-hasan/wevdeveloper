function number(last_number){
    for(let i=1;i<last_number;i++){
        if(i%3==0 && i%5==0){
            console.log('foobar');
        }else if(i%5==0){
            console.log('bar');
        }else if(i%3==0)
        {
            console.log('foo');
        }else{
            console.log(i);
        }
    }
}
number(50);