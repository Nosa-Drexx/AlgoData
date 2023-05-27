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
} from "../implementing functions";

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

describe("Test for postfix calculator", () => {
  test("Test postfix expressions", () => {
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
