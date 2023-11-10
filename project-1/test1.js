//function declaration
function test(a, b) {
  return a + b;
}

//call a function
let result1 = test(10, 20);
console.log(result1);

function compareData(first, second) {
  if (first < second) {
    return first;
  } else if (first === second) {
    return "equal";
  } else {
    return second;
  }
}

console.log(compareData(10, 20));
console.log(compareData(123, 89));
console.log(compareData(-897, -20));

//find sum of elemenst of an array
function findSum(numberArray) {
  let sum = 0;
  for (let element of numberArray) {
    sum = sum + element; //sum+=element
  }
  return sum;
}

console.log(findSum([10, 20]));

console.log(findSum([12, 20, 45]));

//function expression
let sum = function (numberArray) {
  let sum = 0;
  for (let element of numberArray) {
    sum = sum + element; //sum+=element
  }
  return sum;
};

console.log(sum([1,2,3]))