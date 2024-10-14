// function sortArrayRandomly(array) {
//   const arr = [...array];
//   for (let i = 0; i < arr.length; i++) {
//     var temp = arr[i];
//     const randomPosition = Math.floor(Math.random() * (arr.length - 1));
//     arr[i] = arr[randomPosition];
//     arr[randomPosition] = temp;
//   }
//   return arr;
// }

// var randomArr = sortArrayRandomly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
// // console.log(randomArr);

// const reNamedFilesOrder = {
//   "2.png": "100.png",
// };

// let dummy = "Creators #2";

// const nftIndex = dummy.split("#");

// const index = reNamedFilesOrder[`${nftIndex[1]}.png`].split(".");

// dummy = `${nftIndex[0]}#${index[0]}`;

// console.log(dummy);

// let png = "ipfs://NewUriToReplace/2.png";
// const result = png.replace(/\/d+/g, `${index}`);
// png = result;
// console.log(png);

// const createList = (list, values, index) => {
//   if (!values[index]) return;
//   list.val = values[index];
//   if (!values[index + 1]) {
//     list.next = null;
//     return;
//   }
//   list.next = {};
//   return createList(list.next, values, index + 1);
// };
// const list = {};

// const test = createList(list, [1, 2, 3, 4], 0);
// console.log(list);

// const storage = { listOne: "" };
// const trevaseList = (list, listStorageSting, keyToUpdate) => {
//   if (list.val)
//     listStorageSting[keyToUpdate] = `${list.val}${
//       listStorageSting[keyToUpdate] || ""
//     }`;
//   return list.next ? trevaseList(list.next, listStorageSting, keyToUpdate) : "";
// };

// trevaseList(list, storage, "listOne");

// console.log(storage, "storage");

var addTwoNumbers = function (l1, l2) {
  const StringObj = {
    l1String: ``,
    l2String: ``,
  };

  const result = {};

  const trevaseList = (list, listStorageSting, keyToUpdate) => {
    if (typeof Number(list.val) === "number")
      listStorageSting[keyToUpdate] = `${list.val}${
        listStorageSting[keyToUpdate] || ""
      }`;
    return list.next
      ? trevaseList(list.next, listStorageSting, keyToUpdate)
      : "";
  };

  trevaseList(l1, StringObj, "l1String");
  trevaseList(l2, StringObj, "l2String");

  // console.log(StringObj);

  const reversedTotal = (
    BigInt(StringObj.l1String) + BigInt(StringObj.l2String)
  ).toString();

  // console.log(reversedTotal);
  const createList = (list, values, index) => {
    if (typeof values[index] === "undefined") return;
    list.val = values[index];
    if (typeof values[index + 1] === "undefined") {
      list.next = null;
      return;
    }
    list.next = {};
    return createList(list.next, values, index + 1);
  };

  createList(result, reversedTotal.split("").reverse(), 0);
  return result;
};
const l1 = {};
const l2 = { val: 5, next: { val: 6, next: { val: 4, next: null } } };

const values = [
  1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 1,
];
const createList = (list, values, index) => {
  if (typeof values[index] === "undefined") return;
  list.val = values[index];
  if (typeof values[index + 1] === "undefined") {
    list.next = null;
    return;
  }
  list.next = {};
  return createList(list.next, values, index + 1);
};

createList(l1, values, 0);

// console.log(l1, " created list");

const result = addTwoNumbers(l1, l2);
console.log(result);
