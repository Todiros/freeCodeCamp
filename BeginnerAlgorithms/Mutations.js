function mutation(arr) {
    var firstStrArr = arr[0].toLowerCase().split('');
    var secondStrArr = arr[1].toLowerCase().split('');
    
    for (var i = 0; i < firstStrArr.length; i++) {
        let index = secondStrArr.indexOf(firstStrArr[i]);
      
        // goes through all matched letters and removes them
        while (index !== -1) {
            secondStrArr.splice(index, 1);
            index = secondStrArr.indexOf(firstStrArr[i]);
        }
      
        // return true, if all letters from the second word are removed (matched) 
        if (secondStrArr.length === 0) {
            return true;
        } 
    }
    
    return false; 
}

mutation(['hello', 'hey']);
  