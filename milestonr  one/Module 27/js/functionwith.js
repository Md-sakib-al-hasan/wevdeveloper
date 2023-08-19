document.getElementById('btn-widthraw').addEventListener('click',function(){
    const newidthraw = getValueById('widthraw_field');
    const prewidthraw = getValueById1('withdraw-total');
    const totalwidthraw = newidthraw +prewidthraw;
    setTextElemetValue('withdraw-total',totalwidthraw);
    const pretotal = getValueById1('blance-total');
    const totablance = pretotal -newidthraw;
    setTextElemetValue('blance-total',totablance)
})