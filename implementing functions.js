function map(value, cb) {
    var newArray = [];
    if (Array.isArray(value) == true) {
        for (let indexValue of value) {
            index = value.indexOf(indexValue);
            cb(indexValue, index, value);

            newArray.push(
                cb(indexValue, index, value)
            );
        }
    }
    else if (typeof value == "object") {
        for (let key in value) {
            cb(value[key], key, value);
            newArray.push(
                cb(value[key], key, value)
            )
        }
    }
    else {
        console.log(`Please put in an array or an object`)
    }
    return newArray;
}

var test = map([9, 6, 9, 7, 7], function (value, index, array) {
    return index;
});
/////

// function filter(predicateFn, array) {
//     if (array.length == 0) return [];
//     const firstItem = head(array);
//     const filteredFirst = predicateFn(firstItem) ? [firstItem] : [];
//     return concat(filteredFirst,filter(predicateFn,tail(array)));
// }

// var wholes = [0, 1 , 2, 3, 4, 5, 6, 7, 8, 9, 10];

// function isEven(n) {
//     var check = n/2;
//     if(check.isInterger()){
//         return true;
//     }else {
//         return false;
//     }
// }
// var kkk = filter(isEven, wholes);
// console.log(kkk);

// function that checkes if a number is even
var n = 7;
function isEven(n) {
    var keep = n / 2;
    if (Number.isInteger(keep)) {
        return true;
    } else {
        return false;
    }
}

/// Or
function isEven2(n) {
    var keep = n % 2;
    if (keep === 0) {
        return true;
    }
    else {
        return false;
    }
}
//console.log(isEven2(n));

// Prime number tester using loops and if statement.

function isPrime(n) {
    var keep;
    for (let i = 2; i <= 13; i++) {
        if (n == 1 || n == 0) {
            keep = false;
        }
        else if (n > i &&
            n % i === 0 &&
            typeof keep == "undefined" // prevent keep from being resigned 
        ) {
            keep = false;
        }
        else if (n == i && typeof keep == "undefined") {
            keep = true;
        }
    }
    return keep;
}
//console.log(isPrime(15));

//isPrime using if statements.
function isPrime2(n){
    if(n==2){return true;}
    if(!isEven(n)) {
        if(n==3||
        n==5||
        n==7||
        n==11)
        {return true;}

        else if (n%3==0 ||
                n%5== 0 ||
                n%7 == 0 ||
                n%11 == 0) {
                    return false;
                }
                return true;
     }
     return false;
}

//console.log(isPrime2(47));

// Implementing a setTimeOut.
function delay(func, wait) {

    var d = Date.now();
    var currentDate;
    do {
        currentDate = Date.now();
    }
    while (currentDate - d < wait);

    return func();
}

function reverse(arr) {
    var temp = [];
    for (let item of arr) {
        temp.unshift(item);
    }

    /*loops throught the temp array backwards so as to pop the last elements in the arr array while
    adding to the front of the arr array the elements in the temp array from backwards */
    for (let item = temp.length - 1; item >= 0; item--) {
        arr.pop();
        arr.unshift(temp[item]);
    }
}


var array = [1, 2, 3];
reverse(array);
//console.log(array);

/*functions that input random numbers in an array and also sort the array in ascending
order at the same time prevent reoccurence of numbers in the array. */

function lotteryNum() {
    return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber() {
    var num = 0;
    var k = 1;
    var keep = lotteryNum();
    luckyLotteryNumbers.push(keep);
    luckyLotteryNumbers.sort(function (a, b) {
        if (a - b == 0) { // prevent recursion of same numbers.
            k = luckyLotteryNumbers.indexOf(a);
            num = 1;
        }
        return a - b
    })
    luckyLotteryNumbers.splice(k, num); //only removes a value if it reoccures hence (a-b) = 0
}
var luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < 6) {
    pickNumber();
}

//console.log(luckyLotteryNumbers);

//A isPalindrome function that checks if the str is the same if called backwards
function isPalindrome(str) {
    var another = '';
    for (let i = str.length - 1; i >= 0; i--) {// a loop to loop through the str parameter from the back.
        another += str[i];
    }
    (another === str) ? true : false

}


// console.log( isPalindrome("") === true );
// console.log( isPalindrome("a") === true );
// console.log( isPalindrome("aa") === true );
// console.log( isPalindrome("aba") === true );
// console.log( isPalindrome("abba") === true );
// console.log( isPalindrome("abccba") === true );

// console.log( isPalindrome("ab") === false );
// console.log( isPalindrome("abc") === false );
// console.log( isPalindrome("abca") === false );
// console.log( isPalindrome("abcdba") === false );


function pipe(...args) {
    return function piped(input) {
        for (item of args) {
            input = items(input);
        }
        return input;
    }
}

/*Same functionality as the filter method on arrays */
function filterIn(cb, arr) { 
    var newArr = [];
    for (let elem of arr) {
        if (cb(elem)) {
            newArr = [...newArr, elem]; //used in place of the newArr.push(elem) as a form of functional progarmming style.
            //newArr.push(elem);
        }
    }
    return newArr;
}

items = filterIn(function (value) {
    return value > 5
}, [1, 2, 3, 4, 5, 6, 8]);

console.log(items);

//A function that prevent duplications in an array.
function uniqueElemArr(arr){
    let item = [];
    for(let value of arr) {
        if(!item.includes(value)){
            item = [...item,value] /// equivalent to "item.push(value)"
        }
}
    return item;
}

//console.log( uniqueElemArr([1,2,3,1,1,2,3,4,5,]) );



/*Making a reduce function works for only arrays */
function reduceArr(cb,acc,arr){ //
        for(let elem of arr){
        acc = cb(acc,elem);
        }
        return acc;
}

//reduce for both obj and arrays
function reduceObj(reducerFn,initialValue,o) {
	for(let key in o){
		initialValue = reducerFn(initialValue,o[key]);
	}
	return initialValue;
}

var stringReduceTest = reduceObj(function(one, two){
    return one + two;
},"",["Nosa ","Is ","A ","Genius"]);

//console.log(stringReduceTest);


//making a map function with explicitly implemented reduce function
function mapWithExplicitReduceFunction (arr,mappingFn) { 
return  reduceObj(function(first,second){ 
            first.push(mappingFn(second));
            return first;
        },[],arr);
}


//making a filter function with explicitly implemented reduce function
function filterWithExplicitReduceFunction(arr,filterFn){
    return reduceObj(
    function(first,second){
        if(filterFn(second)){
            first.push(second);
        }
        return first;
    },[], arr)
}

// Implimenting the curry function 
function curryN(no,fn){
    var newArrHolder = [];
    var i = 1;
    return function curryHolder(v) {
            newArrHolder = [...newArrHolder, v];
            if(i < no){
                i++;
                return curryHolder;
            } 
               return fn(...newArrHolder);
        }
}


//Test for curry  function.
function addOneCurry(x,y,z){
    return x + y + z;
}
function addOne(x){
    return x + 1 ;
}
function mul(int){
    return int * 2
}

var holder = curryN(3,addOneCurry);
// console.log(holder(7)(7)(7));



 /*Implimenting the compose untility */
 function compose(...args){
    const arr = [...args.reverse()];
    return function composeHelper(input){
        for(let elem of arr){
           input = elem(input);
        }
        return input;
    }
}

//Test for compose
var ok = compose(addOne,mul);
//console.log(ok(7));

//Another implimentation of pipe in term of compose.
function pipe(...args){
    const arr = [...args]
    return compose(...arr.reverse());
}

//Test for compose
var ok = pipe(addOne,mul);
//console.log(ok(7));

//convert Numbers to different base.
function convertNumberToDifferentBase(value,converTo) {
         return value.toString(converTo);
}

