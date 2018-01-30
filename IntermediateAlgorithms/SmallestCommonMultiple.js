const findMinFromArr = arr => {
  if (arr[0] > arr[1])
    // swapping the two elements in the array
    arr[0] = arr.splice(1, 1, arr[0])[0];
  
  return arr;
};

const findLCM = (LCM, next) => {
  let isLCM = false;
  let currentLCM = 0;
    
  while (!isLCM) {
    currentLCM += LCM;

    if (currentLCM % next === 0) {
      isLCM = true;
      LCM = currentLCM;
    }
  }
  
  return LCM;
};

function smallestCommons(arr) {
  arr = findMinFromArr(arr);
  let min = arr[0];
  let max = arr[1];
  
  let LCM = min;
  
  for (let i = min; i < max; i++) {
    let current = i;
    let next = current + 1;
    
    LCM = findLCM(LCM, next);
  }
  
  return parseInt(LCM, 10);
}

smallestCommons([1,13]);