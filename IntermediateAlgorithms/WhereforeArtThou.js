function whatIsInAName(collection, source) {
    var arr = [];
    
    // go through the array of object
    for (let i = 0; i < collection.length; i++) {
        let sourceKeys = Object.keys(source);
        let propsMatch;
      
        // for each object in the array, go through all the target object's props (sourceKeys)
        sourceKeys.forEach((key) => {
            propsMatch = false;
        
            // checking if props are equal 
            if (collection[i].hasOwnProperty(key)) {
                if (collection[i][key] === source[key]) {
                    propsMatch = true;
                }
            }
        });
      
        // if props are equal, push into the result array
        if (propsMatch) {
            arr.push(collection[i]);
        }
    }
    
    return arr;
}
  
whatIsInAName([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
  