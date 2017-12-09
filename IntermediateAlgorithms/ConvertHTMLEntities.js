function convert(str) {
    switch(str) {
    case '&': return '&amp;';
    case '<': return '&lt;';
    case '>': return '&gt;';
    case '"': return '&quot;'; 
    case '\'': return '&apos;';
    }  
}
  
function convertHTML(str) {
    let arr = str.split('');
    let htmlSymbol = '';
    
    arr.forEach((element, index, arr) => {
        let match = /[&<>"']/.test(element);
      
        if (match) {
            htmlSymbol = convert(element);
            arr[index] = htmlSymbol;
        }
        
    });
    
    str = arr.join('');
    
    return str;
}
  
convertHTML('Dolce & Gabbana');
  