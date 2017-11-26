function confirmEnding(str, target) {
    let targetsLength = target.length;
    let targetStart = str.length - targetsLength;
    
    let endSubstr = str.substr(targetStart, targetsLength);
    
    if (endSubstr === target) {
        return true;
    }
    
    return false;
}

confirmEnding('Bastian', 'n');
  