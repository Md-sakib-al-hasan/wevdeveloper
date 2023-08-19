document.getElementById('btn-sumit').addEventListener('click',function(){
   const dipositField = document.getElementById('diposit-field');
   const diposit= parseFloat(dipositField.value);
    console.log(diposit);
     if(isNaN(diposit) == false){
     const deposit_amount= document.getElementById('Deposit-amount');
     const Deposit_value= deposit_amount.innerText;
     const sk = parseFloat(Deposit_value);
     deposit_amount.innerText= diposit+sk;
     dipositField.value = '';
     
     const Blance = document.getElementById('blance_sum');
     const Blance_int=parseFloat(Blance.innerText);
     Blance.innerText=diposit+Blance_int;
    }else{
        alert('fale');
    }
}
)