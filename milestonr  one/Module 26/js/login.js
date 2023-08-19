document.getElementById('btn-sumit').addEventListener('click',function (){
  const emailField = document.getElementById('user-email');
  const email = emailField.value;
  const passwordField = document.getElementById('usr-password');
  const password= passwordField.value;


  if(email === 'sakib@email.com' && password === 'sakib'){
    window.location.href = 'bank.html';
  }else{
       alert('Toke ami tedijj sontan goson korlam tui password bole gesohos');
  }
})