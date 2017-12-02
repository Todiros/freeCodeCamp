function pairElement(str) {
    const bases = str.split('');
    let dnaStrand = [];
    
    bases.forEach((base) => {
        let pair = [];
      
        switch (base) {
        case 'A': pair = ['A', 'T'];
            break;
        case 'T': pair = ['T', 'A'];
            break;
        case 'C': pair = ['C', 'G'];
            break;
        case 'G': pair = ['G', 'C'];
            break;
        }
      
        dnaStrand.push(pair);
    });
    
    return dnaStrand;
}
  
pairElement('GCG');
  