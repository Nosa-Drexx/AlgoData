import { ArrayList, BloomFilter } from "../src/datastructures";

describe("Test for array data-strucure", () => {
  const arrayDS = new ArrayList();
  test("test push", () => {
    arrayDS.push(3);
    arrayDS.push(4); // {"0" : 3, "1" : 4, "length" :2}

    expect(arrayDS).toEqual({ 0: 3, 1: 4, length: 2 });
  });
  test("test pop", () => {
    arrayDS.pop();

    expect(arrayDS).toEqual({ 0: 3, length: 1 });
  });
  test("get value by index", () => {
    const value = arrayDS.get(0);

    expect(value).toBe(3);
  });
  test("shift", () => {
    arrayDS.shift();

    expect(arrayDS).toEqual({ length: 0 });
  });
  test("delete", () => {
    arrayDS.push(4); // {0: 4, length: 1}
    arrayDS.delete(0); // {}

    expect(arrayDS).toEqual({ length: 0 });
  });
});

describe("Test for BloomFilter", () => {
  const bloomFilterDS = new BloomFilter();

  test("test", () => {
    expect(bloomFilterDS.contains("Nosa")).toBe(false);
    bloomFilterDS.add("Nosa");
    expect(bloomFilterDS.contains("Nosa")).toBe(true);
  });
});
