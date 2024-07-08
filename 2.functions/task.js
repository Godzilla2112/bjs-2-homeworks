function getArrayParams(...arr) { 
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    } 
    if (arr[i] > max) {
      max = arr[i];
  }
  sum += arr[i];
}

const avg = Number((sum / arr.length).toFixed(2))

  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) { 
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((sum, element) => sum + element, 0);
}

function differenceMaxMinWorker(...arr) { 
  if (arr.length === 0) {
    return 0;
  }
  const max = Math.max(...arr); 
  const min = Math.min(...arr);
  return max - min;

}

function differenceEvenOddWorker(...arr) { 
  if (arr.length === 0) {
    return 0;
  } 
  let sumEvenElement = 0;
  let sumOddElement = 0;
  for (const element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
    } else {
      sumOddElement += element;
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (const element of arr) {
    if (element % 2 === 0) {
      sumEvenElement += element;
      countEvenElement++;
    }
  }
  return countEvenElement > 0 ? sumEvenElement / countEvenElement : 0;
}

function makeWork (arrOfArr, func) {
  let maxWorkResult = -Infinity;

  for (let i = 0; i < arrOfArr.length; i++) { 
    const workerResult = func(...arrOfArr[i]);
    maxWorkResult = Math.max(maxWorkResult, workerResult);
      maxWorkResult = maxWorkResult; 
  }
  return maxWorkResult;

}
