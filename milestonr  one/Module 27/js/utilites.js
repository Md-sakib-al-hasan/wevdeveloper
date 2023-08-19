function getValueById(inputId){
    const inputField =document.getElementById(inputId);
    const inputString = inputField.value;
    const inputAmount = parseFloat(inputString);
    inputField.value = ' ';
    return inputAmount;

}
function getValueById1(inputId){
    const inputField =document.getElementById(inputId);
    const inputString = inputField.innerText;
    const inputAmount = parseFloat(inputString);
     inputField.innerText = ' ';
    return inputAmount;
}
function setTextElemetValue (elemetn ,newvlaue){
    const  textElement =document.getElementById(elemetn);
     textElement.innerText = newvlaue;

}

