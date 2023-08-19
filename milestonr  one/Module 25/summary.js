function handleOnclick(){
    document.getElementById('handle-status').innerText = "Handle Event by Add onclick Function";
}
const event_list=document.getElementById('event-lisenter');
 event_list.addEventListener('click',function(){
    document.getElementById('handle-status').innerText="Handle AddEventListener Functon";
 });
 function text_update(){
   const inputval= document.getElementById('text-input').value;
   document.getElementById("handle-status").innerText = inputval;
   document.getElementById('text-input').value = '';
 }