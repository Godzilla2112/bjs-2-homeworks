"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b * b - 4 * a * c;

  if (discriminant < 0) {
    return [];
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
  } else {
    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
    arr.push(root1, root2);
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

}


function calculateTotalMortgage(percent, contribution, amount, countMonths) {

  let monthlyRate = (percent / 100) / 12;

  let principal = amount - contribution;

  let monthlyPayment = principal * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));

  let totalAmount = monthlyPayment * countMonths;

  return Number(totalAmount.toFixed(2));
}
