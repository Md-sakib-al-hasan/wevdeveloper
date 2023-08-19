document.getElementById('btn-widthraw').addEventListener('click',function(){
  const btnWidthraw =document.getElementById('widthraw_field');
  const btnWidthrawStringString = btnWidthraw.value;
  const newbtnWidthraw= parseFloat(btnWidthrawStringString);
  btnWidthraw.value = '';

  const WidthrawTotal= document.getElementById('withdraw-total');
  const Prewidthrawstring = WidthrawTotal.innerText;
  const PrewidthrawAmount = parseFloat(Prewidthrawstring);
    WidthrawTotal.innerText = newbtnWidthraw +PrewidthrawAmount;


 const blanceTotal= document.getElementById('blance-total');
  const blanceString = blanceTotal.innerText;
  const blanceAmount = parseFloat(blanceString);
  blanceTotal.innerText = blanceAmount - newbtnWidthraw;
})