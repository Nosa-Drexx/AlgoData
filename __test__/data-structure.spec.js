import { ArrayList, BloomFilter, Queue } from "../src/datastructures";

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

describe("Test for Queue", () => {
  const queueDS = new Queue();
  test("Test enqueue", () => {
    queueDS.enqueue(1);
    queueDS.enqueue(9);
    queueDS.enqueue(7);

    expect(queueDS).toEqual({
      0: 1,
      1: 9,
      2: 7,
      _length: 3,
      _track: 0,
    });
  });

  test("Test dequeue", () => {
    queueDS.dequeue();
    queueDS.dequeue();

    expect(queueDS).toEqual({
      2: 7,
      _length: 1,
      _track: 2,
    });
  });

  test("Test peek", () => {
    const value = queueDS.peek();

    expect(value).toBe(7);
  });
});
