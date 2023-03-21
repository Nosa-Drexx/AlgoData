import {
  MostOccuringNumberInAnArray,
  fibonacciSeries,
  isPrime3
} from "../implementing functions";

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
		const answer = isPrime3(n);

		expect(answer).toBe(true);
	});

	test("Expects answer to be false", () => {
		const n = 18;
		const answer = isPrime3(n);

		expect(answer).toBe(false);
	});
});
