function isJavaScriptFile(fileName){
    if(fileName.toLowerCase().endsWith('.js')) return true;
    else return false;
}

console.log(isJavaScriptFile("sakib.html"));