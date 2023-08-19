
document.getElementById('contorlar').addEventListener('click',function(){
    const inputText = document.getElementById('text_area');
    const inputVal= inputText.value;
    const p=document.createElement('p');
    p.innerText= inputVal;
    const parent=document.getElementById('parent_div');
    parent.appendChild(p);
    inputText.value= ' ';
})