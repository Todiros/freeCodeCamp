function addSufix(arr, sufix) {
    let str = arr.join('');
    return str += sufix;
}
  
function ifConsonant(word, consonants) {
    let result = [false];
    
    consonants.forEach((c) => {
        if (word.startsWith(c)) {
            result = [true, c];
        } 
    });
    
    return result;
}
  
function translatePigLatin(str) {
    const consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z' ,'ch', 'sh', 'sm', 'str', 'th', 'gl'];
    const ifConsonantResult = ifConsonant(str, consonants);
    let wordArr = str.split('');
    
    // if the first element is true, the second is the matched consonant
    if(ifConsonantResult[0]){
        let consonant = wordArr.splice(0, ifConsonantResult[1].length);
        wordArr.push(consonant.join(''));
      
        str = addSufix(wordArr, 'ay');
    } else {
        str = addSufix(wordArr, 'way'); 
    }
    
    return str;
}
  
translatePigLatin('glove');
  