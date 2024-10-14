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

// console.log(id());

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
// console.log(randomNumberBetween(30, 10));

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

// const answer = fibonacciSeries(1000);
// console.log(answer);
function dayOfProgrammer(year) {
  // Write your code here
  const dayOfProgramming = 256;
  let otherMonthAddition = 215;
  const firstEightMonths =
    year % 4 === 0 ? otherMonthAddition + 29 : otherMonthAddition + 28;
  return `${dayOfProgramming - firstEightMonths}.09.${year}`;
}

// console.log(dayOfProgrammer(2100));

function helper(arr, count, index) {
  let accum = 0;
  const comp = arr.length;
  for (let i = index; i <= comp && arr[i] !== undefined; i = i + count) {
    accum += arr[i];
  }
  return accum;
}

function formingMagicSquare(s) {
  // Write your code here
  const n = s.length;
  let allElemInArray = [];
  const magicContanst = 15;
  const choosenRow = {};
  let result = 0;

  function flatMap(allElemInArray) {
    for (let elem of s) {
      allElemInArray.push(...elem);
    }
  }

  for (let subArray of s) {
    allElemInArray = [];
    flatMap(allElemInArray);
    const addAllElem = subArray.reduce((accum, num) => {
      return accum + num;
    }, 0);
    if (addAllElem !== magicContanst) {
      let index;
      let smallestElemIndex = 0;
      for (let i = 0; i < subArray.length; i++) {
        let columnAddition = helper(allElemInArray, subArray.length, i);
        if (subArray[smallestElemIndex] > subArray[i]) smallestElemIndex = i;
        if (columnAddition === addAllElem && !choosenRow[i]) {
          if (index === undefined) {
            choosenRow[i] = "choosen";
            index = i;
          }
          if (subArray[index] < subArray[i]) {
            delete choosenRow[index];
            index = i;
            choosenRow[i] = "choosen";
          }
        }
      }

      if (index !== undefined) {
        const difference = magicContanst - addAllElem;
        result += Math.abs(subArray[index] - (subArray[index] + difference));
        subArray[index] += difference;
      } else {
        if (addAllElem > magicContanst && index === undefined) {
          const difference = magicContanst - addAllElem;
          result += Math.abs(
            subArray[smallestElemIndex] -
              (subArray[smallestElemIndex] + difference)
          );
          subArray[smallestElemIndex] += difference;
        }
      }
    }
  }
  return result;
}

// const threeBythreeArray = [
//   [5, 3, 4],
//   [1, 5, 8],
//   [6, 4, 2],
// ];

// const threeBythreeArray2 = [
//   [4, 9, 2],
//   [3, 5, 7],
//   [8, 1, 5],
// ];

// const threeBythreeArray3 = [
//   [4, 8, 2],
//   [4, 5, 7],
//   [6, 1, 6],
// ];

// console.log(formingMagicSquare(threeBythreeArray3));

// console.log(threeBythreeArray3);
