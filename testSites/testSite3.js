function sortArrayRandomly(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length; i++) {
    var temp = arr[i];
    const randomPosition = Math.floor(Math.random() * (arr.length - 1));
    arr[i] = arr[randomPosition];
    arr[randomPosition] = temp;
  }
  return arr;
}

var randomArr = sortArrayRandomly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// console.log(randomArr);

function mergeSort(array) {
  const arr = [...array];
  const half = arr.length / 2;

  function merge(left, right) {
    var mergedArr = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        mergedArr.push(left.shift());
      } else {
        mergedArr.push(right.shift());
      }
    }
    return mergedArr.concat(left, right);
  }
  if (arr.length > 1) {
    var left = mergeSort(arr.splice(0, half));
    var right = mergeSort(arr);
    return merge(left, right);
  }
  return arr;
}

// console.log(mergeSort(randomArr));

function isValidSubsequence(array, sequence) {
  var arrC = [...array];
  var arr = [];

  for (let i = 0; i < sequence.length; i++) {
    if (arrC.includes(sequence[i])) {
      arr.push(sequence[i]);
      arrC = arrC.splice(arrC.indexOf(sequence[i]) + 1, arrC.length);
    }
  }

  return arr.length === sequence.length ? true : false;
}

var array = [1, 1, 1, 1];
var sequence = [1, 1, 1];
// console.log(isValidSubsequence(array, sequence));

function id() {
  var randomId = "_";
  const fakeIdGen = () => Math.floor(Math.random() * 9);
  for (let i = 0; i < 5; i++) {
    randomId += fakeIdGen();
  }
  return randomId;
}

console.log(id());

function randomNumberBetween(first, second) {
  if (typeof first !== "number" && typeof second !== "number")
    return "error expected type Number";
  const firstVal = Number(first);
  const secondVal = Number(second);
  const diff = Math.abs(firstVal - secondVal) - 1;

  const randomDiff = Math.floor(Math.random() * diff);
  const bigger = firstVal > secondVal ? firstVal - 1 : secondVal - 1;
  return Math.abs(bigger - randomDiff);
}
console.log(randomNumberBetween(30, 10));

function fibonacciSeries(value) {
  const cache = {};
  function fibHelper(value) {
    if (value < 3) return 1;
    const prev = cache[value - 1] ? cache[value - 1] : fibHelper(value - 1);
    const secondPrev = cache[value - 2]
      ? cache[value - 2]
      : fibHelper(value - 2);
    const result = prev + secondPrev;
    if (!cache[value]) cache[value] = result;
    return result;
  }
  return fibHelper(value);
}

const answer = fibonacciSeries(1000);
console.log(answer);
