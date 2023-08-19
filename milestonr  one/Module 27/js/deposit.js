document.getElementById('btn-deposit').addEventListener('click',function(){
  const dipositField = document.getElementById('diposit-field');
  const newdipositstring = dipositField.value;
  const newdipositAmount = parseFloat(newdipositstring);
  dipositField.value = '';
  const deposit_total = document.getElementById('deposit-total');
  const predipositstring=  deposit_total.innerText;
  const predipositAmount = parseFloat(predipositstring);
  deposit_total.innerText =  newdipositAmount + predipositAmount;
   
  const blanceTotal= document.getElementById('blance-total');
  const blanceString = blanceTotal.innerText;
  const blanceAmount = parseFloat(blanceString);
   blanceTotal.innerText = blanceAmount+ newdipositAmount;
})