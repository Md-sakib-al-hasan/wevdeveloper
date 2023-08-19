
document.getElementById('btn-deposit').addEventListener('click',function (){
    const newdposit = getValueById('diposit-field');
    const predposit = getValueById1('deposit-total');
    const totaldeposit = newdposit + predposit;
    setTextElemetValue('deposit-total',totaldeposit);
    const pretatoabalance = getValueById1('blance-total');
    const totalbalance = pretatoabalance + newdposit;
    setTextElemetValue('blance-total',totalbalance);
    
    


})