import {
  MostOccuringNumberInAnArray,
  fibonacciSeries,
  isPrime3,
  isEven,
  isEven2,
  map,
  isPrime,
  isPrime2,
  reverse,
  reverse2,
  isPalindrome,
  filterIn,
  uniqueElemArr,
  uniqueArr2,
  reduceObj,
  prefixCalc,
  postfixCalc,
  prefixCalc2,
  curryN,
  compose,
  pipe,
  convertNumberToDifferentBase,
  concatAll,
  zip,
  bubbleSort,
  insertionSort,
  nestedAdd,
  mergeSort,
  factorial,
  factorial2,
  quickSort,
  radixSort,
  binarySearch,
  nestedAdd2,
  linearSearch,
  preorder,
  postorder,
  inorder,
  tree,
  breadth,
  twoSum,
  isAnagram,
  isValidPalindrome,
  isValidParentheses,
  maxProfit,
  flatten,
  chunk,
  groupAnagrams,
  lengthOfLongestSubstring,
  containsDuplicate,
  productExceptSelf,
  maxSubArray,
  climbStairs,
  mergeIntervals,
} from "../src/algorithms";

describe("Test map function", () => {
  const testArray = [3, 4, 6, 89, 10];
  test("Expect result array to be [0, 1, 2, 3, 4] ", () => {
    const answer = map(testArray, (value, index, array) => index);

    expect(answer).toEqual([0, 1, 2, 3, 4]);
  });
  test("Expect result array to be [4, 5, 7, 90, 11] ", () => {
    const answer = map(testArray, (value) => value + 1);

    expect(answer).toEqual([4, 5, 7, 90, 11]);
  });
  test("Expect result array to be [[3], [4], [6], [89], [10]] ", () => {
    const answer = map(testArray, (value, index, array) =>
      array.slice(index, index + 1)
    );

    expect(answer).toEqual([[3], [4], [6], [89], [10]]);
  });
});

describe("Test Even number", () => {
  test("Expect 6 to an even number", () => {
    const testValue = 6;
    const answer = isEven(testValue);
    const answer2 = isEven2(testValue);

    expect(answer).toBe(true);
    expect(answer2).toBe(true);
  });
  test("Expect 7 to an even number", () => {
    const testValue = 7;
    const answer = isEven(testValue);
    const answer2 = isEven2(testValue);

    expect(answer).toBe(false);
    expect(answer2).toBe(false);
  });
  test("Expect 4 to an even number", () => {
    const testValue = 4;
    const answer = isEven(testValue);
    const answer2 = isEven2(testValue);

    expect(answer).toBe(true);
    expect(answer2).toBe(true);
  });
});

describe("Test MostOccuringNumberInAnArray", () => {
  test("Expect most occuring number to be 6", () => {
    const testValue = [1, 9, 4, 4, 5, 5, 9, 5, 9, 7, 4, 6, 7, 9, 7, 6, 6, 6, 6];
    const answer = MostOccuringNumberInAnArray(testValue);

    expect(answer).toBe(6);
  });

  test("Expect most occuring number to be an object '{ 6: 5, 9: 5 }'", () => {
    const testValue = [
      1, 9, 4, 9, 4, 5, 5, 9, 5, 9, 7, 4, 6, 7, 9, 7, 6, 6, 6, 6,
    ];
    const answer = MostOccuringNumberInAnArray(testValue);

    expect(answer).toEqual({ 6: 5, 9: 5 });
  });

  test("Expect most occuring number to be an object '{ 4: 5, 6: 5, 9: 5 }'", () => {
    const testValue = [
      1, 9, 4, 9, 4, 5, 4, 5, 9, 5, 9, 7, 4, 6, 7, 9, 7, 6, 6, 6, 6, 4,
    ];
    const answer = MostOccuringNumberInAnArray(testValue);

    expect(answer).toEqual({ 4: 5, 6: 5, 9: 5 });
  });
});

describe("Test Fibonanci Series", () => {
  test("Expects answer to be 1", () => {
    const value = 0;
    const answer = fibonacciSeries(value);

    expect(answer).toBe(1);
  });

  test("Expects answer to be 6765", () => {
    const value = 20;
    const answer = fibonacciSeries(value);

    expect(answer).toBe(6765);
  });

  test("Expects answer to be 5", () => {
    const value = 5;
    const answer = fibonacciSeries(value);

    expect(answer).toBe(5);
  });

  test("Expects answer to be Infinity", () => {
    const value = 10000;
    const answer = fibonacciSeries(value);

    expect(answer).toBe(Infinity);
  });
});

describe("Test Prime Number", () => {
  test("Expects answer to be true", () => {
    const n = 17;
    const answer = isPrime(n);
    const answer2 = isPrime2(n);
    const answer3 = isPrime3(n);

    expect(answer2).toBe(true);
    expect(answer3).toBe(true);
  });

  test("Expects answer to be false", () => {
    const n = 18;
    const answer = isPrime(n);
    const answer2 = isPrime2(n);
    const answer3 = isPrime3(n);

    expect(answer).toBe(false);
    expect(answer2).toBe(false);
    expect(answer3).toBe(false);
  });

  test("Expects answer to be false", () => {
    const n = 15;
    const answer = isPrime(n);
    const answer2 = isPrime2(n);
    const answer3 = isPrime3(n);

    expect(answer).toBe(false);
    expect(answer2).toBe(false);
    expect(answer3).toBe(false);
  });
});

describe("Test reverse array", () => {
  test("Expects reversed array to be [5, 4, 3, 2, 1]", () => {
    const answer = reverse([1, 2, 3, 4, 5]);
    const answer2 = reverse2([1, 2, 3, 4, 5]);

    expect(answer).toEqual([5, 4, 3, 2, 1]);
    expect(answer2).toEqual([5, 4, 3, 2, 1]);
  });
});

describe("Test isPalindrome", () => {
  test("Expects be '' to be true", () => {
    const answer = isPalindrome("");

    expect(answer).toBe(true);
  });

  test("Expects be 'aa' to be true", () => {
    const answer = isPalindrome("aa");

    expect(answer).toBe(true);
  });

  test("Expects be 'abba' to be true", () => {
    const answer = isPalindrome("abba");

    expect(answer).toBe(true);
  });

  test("Expects be 'abccba' to be true", () => {
    const answer = isPalindrome("abba");

    expect(answer).toBe(true);
  });
});

describe("Test for filterIn", () => {
  const testArray = [1, 2, 3, 4, 5, 6, 8];
  test("Expects [1, 2, 3, 4, 5, 6, 8] filters greater than 5 to be [6, 8]", () => {
    const answer = filterIn((value) => value > 5, testArray);

    expect(answer).toEqual([6, 8]);
  });

  test("Expects [1, 2, 3, 4, 5, 6, 8] filters greater than or equals 5 to be [5,6, 8]", () => {
    const answer = filterIn((value) => value >= 5, testArray);

    expect(answer).toEqual([5, 6, 8]);
  });

  test("Expects [1, 2, 3, 4, 5, 6, 8] filters less than 5 to be [1, 2, 3, 4]", () => {
    const answer = filterIn((value) => value < 5, testArray);

    expect(answer).toEqual([1, 2, 3, 4]);
  });
});

describe("Test for unique elements in array", () => {
  test("Expects [1,2,3,1,1,2,3,4,5,] to be reduces to  [1,2,3,4,5]", () => {
    const testArray1 = [1, 2, 3, 1, 1, 2, 3, 4, 5];
    const testArray2 = [1, 2, 3, 1, 1, 2, 3, 4, 5];
    const answer1 = uniqueElemArr(testArray1);
    const answer2 = uniqueArr2(testArray2);

    expect(answer1).toEqual([1, 2, 3, 4, 5]);
    expect(answer2).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("Test for reduce function", () => {
  test("Expects ['Nosa ' , 'Is ', 'A ', 'Genius'] to be Nosa Is A Genius", () => {
    let stringReduceTest = reduceObj(
      function (one, two) {
        return one + two;
      },
      "",
      ["Nosa ", "Is ", "A ", "Genius"]
    );

    expect(stringReduceTest).toEqual("Nosa Is A Genius");
  });
});

describe("Test for prefix calculator", () => {
  test("Test prefix expressions", () => {
    const result1 = prefixCalc("0"); // 0
    const result2 = prefixCalc("+ 3 4"); // 7
    const result3 = prefixCalc("- 3 * 4 5"); //-17
    const result4 = prefixCalc("* + 3 4 5"); //35
    const result5 = prefixCalc("+ - 4 6 * 9 / 10 50"); //48.2
    const result6 = prefixCalc("+ * * + 2 3 4 5 + 6 7"); //113

    expect(result1).toBe(0);
    expect(result2).toBe(7);
    expect(result3).toBe(-17);
    expect(result4).toBe(35);
    expect(result5).toBe(48.2);
    expect(result6).toBe(113);
  });
});

describe("Test for second prefix calculator", () => {
  test("Test prefix expressions", () => {
    const result1 = prefixCalc2("0"); // 0
    const result2 = prefixCalc2("+ 3 4"); // 7
    const result3 = prefixCalc2("- 3 * 4 5"); //-17
    const result4 = prefixCalc2("* + 3 4 5"); //35
    const result6 = prefixCalc2("+ * * + 2 3 4 5 + 6 7"); //113

    expect(result1).toBe(0);
    expect(result2).toBe(7);
    expect(result3).toBe(-17);
    expect(result4).toBe(35);
    expect(result6).toBe(113);
  });
});

describe("Test for postfix calculator", () => {
  test("Test postfix expressions", () => {
    const result1 = postfixCalc("0"); // 0
    const result2 = postfixCalc("2 3 4 + * 5 6 7 8 + * + +"); // 109
    const result3 = postfixCalc("2 3 4 * 6 / +"); // 2.5
    const result4 = postfixCalc("5 7 + 1 *"); // 12

    expect(result1).toBe(0);
    expect(result2).toBe(109);
    expect(result3).toBe(2.5);
    expect(result4).toBe(12);
  });
});

describe('Test for curry function', ()=> {
  test("Test curry", ()=> {
    const addOneCurry = (x, y ,z) => {
      return x + y + z
    }

    const curryHolder = curryN(3, addOneCurry);
    expect(curryHolder(7)(7)(7)).toBe(21)
  })
})

describe("Test for compose function", ()=> {
  test('compose function test', ()=> {
    const add = (num) =>  num + 2
    const mul = (num) => num * 2
    

    const composed  = compose(add, mul);

    expect(composed(9)).toBe(20);
  })
});


describe('Test for pipe function', ()=>{
  test('compose function test', ()=> {
    const add = (num) =>  num + 2
    const mul = (num) => num * 2
    

    const piped  = pipe(add, mul);

    expect(piped(9)).toBe(22);
  })
})

describe("Test convetToDifferentBase", ()=> {
  test('convert Number to base 2', ()=>{
    const TwoToBase2 = convertNumberToDifferentBase(2, 2)
    const ThreeToBase2 = convertNumberToDifferentBase(3, 2)
    const EightToBase2 = convertNumberToDifferentBase(8, 2)

    expect(TwoToBase2).toEqual('10')
    expect(ThreeToBase2).toEqual('11')
    expect(EightToBase2).toEqual('1000')
  })
  test('convert Number to base 8', ()=>{
    const TwoToBase8 = convertNumberToDifferentBase(2, 8)
    const ThreeToBase8 = convertNumberToDifferentBase(10, 8)
    const EightToBase8 = convertNumberToDifferentBase(20, 8)

    expect(TwoToBase8).toEqual('2')
    expect(ThreeToBase8).toEqual('12')
    expect(EightToBase8).toEqual('24')
  })
})

describe('Test concatAll function', ()=> {
  test("Test concatAll Two dimenstional array", ()=> {
    const arr = [[1], [2, 3], [], [4]];

    const result = concatAll(arr);
    expect(result).toEqual([1, 2, 3, 4]);
  })
});

describe('Test zip function', ()=> {
  test('test zip function', () => {

    const zipper = zip(
      [1, 2, 3],
      [4, 5, 6],
      function addElemOfBothArray(left, right) {
        return left + right;
      }
    );

    expect(zipper).toEqual([5, 7, 9]);
  })
});

describe("Test sort algorithm", () => {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const supposedAnswer  = [...nums].sort((a, b) => a- b)

  //Bubble sort test
  test("Test for bubble sort algorithm", ()=> {
    expect(bubbleSort(nums)).toEqual(supposedAnswer)
  })

  //insertion sort test 
  test("Test for insertion sort", ()=> {
    expect(insertionSort(nums)).toEqual(supposedAnswer)
  })

  //merge sort test 
  test("Test for merge sort",()=> {
    expect(mergeSort(nums)).toEqual(supposedAnswer)
  });

  //quick sort test
  // test("Test for quick sort", ()=> {
  //   expect(quickSort(nums)).toEqual(supposedAnswer)
  // });

  // //radix sort test
  // test("Test for radix sort", ()=> {
  //   expect(radixSort(nums)).toEqual(supposedAnswer)
  // })
});

describe("Test for nested array", ()=> {
  test("Test nested function", ()=> {
    const nested = [1, 2, 3];
    const nested2 = [1, [2], 3];
    const nested3 = [[[[[[[[[[[[[[[[[[[[5]]]]]]]]]]]]]]]]]]]];
    const nested4 = [10, [12, 14, [1], [16, [20]]], 10, 11];

    expect(nestedAdd(nested)).toBe(6)
    expect(nestedAdd(nested2)).toBe(6)
    expect(nestedAdd(nested3)).toBe(5)
    expect(nestedAdd(nested4)).toBe(94)
    //nestedAdd2 function
    expect(nestedAdd2(nested)).toBe(6)
    expect(nestedAdd2(nested2)).toBe(6)
    expect(nestedAdd2(nested3)).toBe(5)
    expect(nestedAdd2(nested4)).toBe(94)
  })
});

describe("Test for factorial function", ()=> {
  test("factorial function test", ()=> {
     expect(factorial(5)).toBe(120);
     expect(factorial2(5)).toBe(120);
  })
});

describe("Test for  search algorithms", ()=> {
  const data = [0, 5, 10, 12, 15, 19, 21, 22, 24, 30];
  const dataObj = [
    { id: 1, name: "Sam" },
    { id: 3, name: "Sarah" },
    { id: 5, name: "John" },
    { id: 6, name: "Burke" },
    { id: 10, name: "Simona" },
    { id: 12, name: "Asim" },
    { id: 13, name: "Niki" },
    { id: 15, name: "Aysegul" },
    { id: 17, name: "Kyle" },
    { id: 18, name: "Jem" },
    { id: 19, name: "Marc" },
    { id: 21, name: "Chris" },
  ]
  test("binary search test",()=> {
    expect(binarySearch(12, data)).toBe(12);
    expect(binarySearch(3, dataObj)).toEqual({ id: 3, name: "Sarah" });
    expect(binarySearch(100, data)).toBe('not found')
  });

  test("linear search test", ()=> {
    expect(linearSearch(12, data)).toBe(12);
    expect(linearSearch(3, dataObj)).toEqual({id: 3, name: "Sarah"});
    expect(linearSearch(100, data)).toBe("not found")
  });
})

describe("Test for tree trevarsa algorithms", ()=> {
  //Test for preorder
  test("Test for preorder algorithm", ()=> {
    expect(preorder(tree, [])).toEqual([8,4,3,2,5,7,6,12,10,9,11])
  })

  //Test postorder 
  test("Test for postorder algorithm", () => {
    expect(postorder(tree, [])).toEqual([2,3,6,7, 5,4, 9, 11, 10, 12, 8])
  });

  //Test inorder
  test("Test for inorder algorithm", () => {
    expect(inorder(tree, [])).toEqual([2,3,4,5,6,7, 6, 8,9,10,11,12]);
  });

  //Test breadth
  test("Test for breadth algorithm", ()=> {
    expect(breadth([tree], [])).toEqual([8,4,12,3,5,10,2,7,9,11,6])
  })
})

describe("Test for twoSum algorithm", () => {
  const sorted = (arr) => [...arr].sort((a, b) => a - b);

  test("[2,7,11,15], 9 -> [0,1]", () => {
    expect(sorted(twoSum([2, 7, 11, 15], 9))).toEqual([0, 1]);
  });
  test("[3,2,4], 6 -> [1,2]", () => {
    expect(sorted(twoSum([3, 2, 4], 6))).toEqual([1, 2]);
  });
  test("[3,3], 6 -> [0,1] (duplicate values)", () => {
    expect(sorted(twoSum([3, 3], 6))).toEqual([0, 1]);
  });
  test("does not use the same element twice", () => {
    expect(sorted(twoSum([5, 1, 4, 6], 10))).toEqual([2, 3]);
  });
  test("handles negative numbers", () => {
    expect(sorted(twoSum([-1, -2, -3, -4, -5], -8))).toEqual([2, 4]);
  });
  test("handles zeros", () => {
    expect(sorted(twoSum([0, 4, 3, 0], 0))).toEqual([0, 3]);
  });
});

describe("Test for isAnagram algorithm", () => {
  test('"anagram", "nagaram" -> true', () => {
    expect(isAnagram("anagram", "nagaram")).toBe(true);
  });
  test('"rat", "car" -> false', () => {
    expect(isAnagram("rat", "car")).toBe(false);
  });
  test("different lengths -> false", () => {
    expect(isAnagram("a", "ab")).toBe(false);
  });
  test("same letters but different counts -> false", () => {
    expect(isAnagram("aacc", "ccac")).toBe(false);
  });
  test("two empty strings -> true", () => {
    expect(isAnagram("", "")).toBe(true);
  });
  test("identical strings -> true", () => {
    expect(isAnagram("listen", "listen")).toBe(true);
  });
  test('"listen", "silent" -> true', () => {
    expect(isAnagram("listen", "silent")).toBe(true);
  });
});

describe("Test for isValidPalindrome algorithm", () => {
  test('"A man, a plan, a canal: Panama" -> true', () => {
    expect(isValidPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });
  test('"race a car" -> false', () => {
    expect(isValidPalindrome("race a car")).toBe(false);
  });
  test('" " -> true', () => {
    expect(isValidPalindrome(" ")).toBe(true);
  });
  test("digits count as characters", () => {
    expect(isValidPalindrome("0P")).toBe(false);
    expect(isValidPalindrome("12321")).toBe(true);
  });
  test("ignores case and punctuation", () => {
    expect(isValidPalindrome("No 'x' in Nixon")).toBe(true);
  });
  test("single character -> true", () => {
    expect(isValidPalindrome("a")).toBe(true);
  });
});

describe("Test for isValidParentheses algorithm", () => {
  test('"()[]{}" -> true', () => {
    expect(isValidParentheses("()[]{}")).toBe(true);
  });
  test('"(]" -> false', () => {
    expect(isValidParentheses("(]")).toBe(false);
  });
  test('"([)]" -> false', () => {
    expect(isValidParentheses("([)]")).toBe(false);
  });
  test('"{[]}" -> true', () => {
    expect(isValidParentheses("{[]}")).toBe(true);
  });
  test("single pair -> true", () => {
    expect(isValidParentheses("()")).toBe(true);
  });
  test("unclosed open bracket -> false", () => {
    expect(isValidParentheses("(")).toBe(false);
    expect(isValidParentheses("(()")).toBe(false);
  });
  test("close bracket with nothing open -> false", () => {
    expect(isValidParentheses(")")).toBe(false);
    expect(isValidParentheses("())")).toBe(false);
  });
  test("deeply nested -> true", () => {
    expect(isValidParentheses("{[()()]}[]")).toBe(true);
  });
});

describe("Test for maxProfit algorithm", () => {
  test("[7,1,5,3,6,4] -> 5", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  test("[7,6,4,3,1] -> 0", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
  });
  test("single day -> 0", () => {
    expect(maxProfit([5])).toBe(0);
  });
  test("lowest price comes after the best trade: [2,4,1] -> 2", () => {
    expect(maxProfit([2, 4, 1])).toBe(2);
  });
  test("new low later gives a better trade: [3,2,6,5,0,3] -> 4", () => {
    expect(maxProfit([3, 2, 6, 5, 0, 3])).toBe(4);
  });
  test("all the same price -> 0", () => {
    expect(maxProfit([4, 4, 4, 4])).toBe(0);
  });
});

describe("Test for flatten algorithm", () => {
  test("[1,[2,3],[4,[5,6]]] -> [1,2,3,4,5,6]", () => {
    expect(flatten([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test('[[[["a"]]],"b"] -> ["a","b"]', () => {
    expect(flatten([[[["a"]]], "b"])).toEqual(["a", "b"]);
  });
  test("empty nested arrays are dropped", () => {
    expect(flatten([1, [], [2, []]])).toEqual([1, 2]);
  });
  test("empty array -> empty array", () => {
    expect(flatten([])).toEqual([]);
  });
  test("already flat array is returned as a copy", () => {
    const input = [1, 2, 3];
    const result = flatten(input);
    expect(result).toEqual([1, 2, 3]);
    expect(result).not.toBe(input);
  });
  test("keeps non-array values like objects, null and undefined as-is", () => {
    const obj = { a: 1 };
    expect(flatten([obj, [null, [undefined]]])).toEqual([obj, null, undefined]);
  });
  test("does not modify the input", () => {
    const input = [1, [2, [3]]];
    flatten(input);
    expect(input).toEqual([1, [2, [3]]]);
  });
  test("handles deep nesting", () => {
    let deep = [42];
    for (let i = 0; i < 100; i++) deep = [deep];
    expect(flatten(deep)).toEqual([42]);
  });
  test("does not use Array.prototype.flat", () => {
    const original = Array.prototype.flat;
    Array.prototype.flat = () => {
      throw new Error("Array.prototype.flat is not allowed");
    };
    try {
      expect(flatten([1, [2, [3]]])).toEqual([1, 2, 3]);
    } finally {
      Array.prototype.flat = original;
    }
  });
});

describe("Test for chunk algorithm", () => {
  test("[1,2,3,4,5], 2 -> [[1,2],[3,4],[5]]", () => {
    expect(chunk([1, 2, 3, 4, 5], 2)).toEqual([[1, 2], [3, 4], [5]]);
  });
  test('["a","b","c","d"], 2 -> [["a","b"],["c","d"]]', () => {
    expect(chunk(["a", "b", "c", "d"], 2)).toEqual([["a", "b"], ["c", "d"]]);
  });
  test("size bigger than the array -> one chunk", () => {
    expect(chunk([1, 2, 3], 5)).toEqual([[1, 2, 3]]);
  });
  test("empty array -> []", () => {
    expect(chunk([], 3)).toEqual([]);
  });
  test("size 1 -> every element in its own chunk", () => {
    expect(chunk([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
  });
  test("size equal to the length -> one chunk", () => {
    expect(chunk([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });
  test("does not modify the input", () => {
    const input = [1, 2, 3, 4];
    chunk(input, 2);
    expect(input).toEqual([1, 2, 3, 4]);
  });
});

describe("Test for groupAnagrams algorithm", () => {
  const normalize = (groups) =>
    groups
      .map((group) => [...group].sort())
      .sort((a, b) => a.join(",").localeCompare(b.join(",")));

  test('["eat","tea","tan","ate","nat","bat"]', () => {
    expect(
      normalize(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
    ).toEqual(normalize([["bat"], ["nat", "tan"], ["ate", "eat", "tea"]]));
  });
  test('[""] -> [[""]]', () => {
    expect(normalize(groupAnagrams([""]))).toEqual([[""]]);
  });
  test('["a"] -> [["a"]]', () => {
    expect(normalize(groupAnagrams(["a"]))).toEqual([["a"]]);
  });
  test("keeps duplicate words in the same group", () => {
    expect(normalize(groupAnagrams(["abc", "bca", "abc"]))).toEqual([
      ["abc", "abc", "bca"],
    ]);
  });
  test("same letters but different counts are not anagrams", () => {
    expect(normalize(groupAnagrams(["aab", "abb", "bab"]))).toEqual(
      normalize([["aab"], ["abb", "bab"]])
    );
  });
  test("no anagrams at all -> every word in its own group", () => {
    expect(normalize(groupAnagrams(["one", "two", "six"]))).toEqual(
      normalize([["one"], ["two"], ["six"]])
    );
  });
});

describe("Test for lengthOfLongestSubstring algorithm", () => {
  test('"abcabcbb" -> 3', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
  test('"bbbbb" -> 1', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1);
  });
  test('"pwwkew" -> 3', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });
  test("empty string -> 0", () => {
    expect(lengthOfLongestSubstring("")).toBe(0);
  });
  test("a single space -> 1", () => {
    expect(lengthOfLongestSubstring(" ")).toBe(1);
  });
  test('"dvdf" -> 3', () => {
    expect(lengthOfLongestSubstring("dvdf")).toBe(3);
  });
  test('"abba" -> 2', () => {
    expect(lengthOfLongestSubstring("abba")).toBe(2);
  });
  test("all unique characters -> full length", () => {
    expect(lengthOfLongestSubstring("abcdef")).toBe(6);
  });
});

describe("Test for containsDuplicate algorithm", () => {
  test("[1,2,3,1] -> true", () => {
    expect(containsDuplicate([1, 2, 3, 1])).toBe(true);
  });
  test("[1,2,3,4] -> false", () => {
    expect(containsDuplicate([1, 2, 3, 4])).toBe(false);
  });
  test("[1,1,1,3,3,4,3,2,4,2] -> true", () => {
    expect(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])).toBe(true);
  });
  test("empty and single element arrays -> false", () => {
    expect(containsDuplicate([])).toBe(false);
    expect(containsDuplicate([7])).toBe(false);
  });
  test("handles negative numbers", () => {
    expect(containsDuplicate([-1, 2, -1])).toBe(true);
    expect(containsDuplicate([-1, 1])).toBe(false);
  });
});

describe("Test for productExceptSelf algorithm", () => {
  test("[1,2,3,4] -> [24,12,8,6]", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
  test("two elements swap", () => {
    expect(productExceptSelf([2, 3])).toEqual([3, 2]);
  });
  test("one zero -> only the zero's position is non-zero", () => {
    expect(productExceptSelf([1, 2, 0, 4])).toEqual([0, 0, 8, 0]);
  });
  test("two zeros -> all zeros", () => {
    expect(productExceptSelf([0, 0, 2])).toEqual([0, 0, 0]);
  });
  test("handles negative numbers", () => {
    expect(productExceptSelf([-1, 2, -3])).toEqual([-6, 3, -2]);
  });
});

describe("Test for maxSubArray algorithm", () => {
  test("[-2,1,-3,4,-1,2,1,-5,4] -> 6", () => {
    expect(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
  });
  test("single element", () => {
    expect(maxSubArray([1])).toBe(1);
  });
  test("whole array is the best subarray", () => {
    expect(maxSubArray([5, 4, -1, 7, 8])).toBe(23);
  });
  test("all negative -> the largest single value", () => {
    expect(maxSubArray([-3, -1, -2])).toBe(-1);
  });
});

describe("Test for climbStairs algorithm", () => {
  test("small values", () => {
    expect(climbStairs(1)).toBe(1);
    expect(climbStairs(2)).toBe(2);
    expect(climbStairs(3)).toBe(3);
  });
  test("5 -> 8 and 10 -> 89", () => {
    expect(climbStairs(5)).toBe(8);
    expect(climbStairs(10)).toBe(89);
  });
  test("large input runs fast", () => {
    expect(climbStairs(45)).toBe(1836311903);
  });
});

describe("Test for mergeIntervals algorithm", () => {
  test("[[1,3],[2,6],[8,10],[15,18]] -> [[1,6],[8,10],[15,18]]", () => {
    expect(
      mergeIntervals([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
      [15, 18],
    ]);
  });
  test("touching intervals are merged", () => {
    expect(
      mergeIntervals([
        [1, 4],
        [4, 5],
      ])
    ).toEqual([[1, 5]]);
  });
  test("unsorted input", () => {
    expect(
      mergeIntervals([
        [8, 10],
        [1, 3],
        [2, 6],
      ])
    ).toEqual([
      [1, 6],
      [8, 10],
    ]);
  });
  test("interval fully inside another", () => {
    expect(
      mergeIntervals([
        [1, 10],
        [2, 3],
      ])
    ).toEqual([[1, 10]]);
  });
  test("empty input -> []", () => {
    expect(mergeIntervals([])).toEqual([]);
  });
  test("does not modify the input", () => {
    const input = [
      [2, 6],
      [1, 3],
    ];
    mergeIntervals(input);
    expect(input).toEqual([
      [2, 6],
      [1, 3],
    ]);
  });
});
