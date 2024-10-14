import {
  ArrayList,
  BinaryTree,
  BloomFilter,
  Graph,
  HashTable,
  Linkedlist,
  Queue,
  Stack,
} from "../src/datastructures";

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

describe("Test for LinkedList Datastructure", () => {
  const linkedListDS = new Linkedlist();
  test("Test Insert", () => {
    linkedListDS.insert(2);
    linkedListDS.insert(7);

    expect(linkedListDS.head.value).toBe(2);
    expect(linkedListDS.head.next.value).toBe(7);
  });

  test("Test InsertNewHead", () => {
    linkedListDS.InsertNewHead(3);

    expect(linkedListDS.head.value).toBe(3);
  });

  test("Test get", () => {
    const node = linkedListDS.get(2);
    //must be made a function because an error is been thrown "Jest rule"
    const node2 = () => {
      linkedListDS.get(10);
    };

    expect(node.value).toBe(2);
    expect(node2).toThrow(Error); //expect to error out
  });

  test("Test reverse", () => {
    linkedListDS.reverseList();
    expect(linkedListDS.head).toEqual({
      next: {
        next: {
          next: null,
          value: 3,
        },
        value: 2,
      },
      value: 7,
    });

    //reverse back to previous state.
    linkedListDS.reverseList();
    expect(linkedListDS.head).toEqual({
      next: {
        next: {
          next: null,
          value: 7,
        },
        value: 2,
      },
      value: 3,
    });
  });

  test("Test remove", () => {
    const removed = linkedListDS.remove(2);
    const removed2 = () => {
      linkedListDS.remove(100);
    };

    expect(removed.value).toBe(2);
    expect(removed2).toThrow(Error);
  });

  test("Test insertIn", () => {
    linkedListDS.insertIn(3, 76);

    const node2 = linkedListDS.get(76);

    expect(node2.value).toEqual(76);
  });

  test("Test removeTail", () => {
    const node = linkedListDS.removeTail();

    expect(node.value).toBe(7);
  });
  test("Test contains", () => {
    const value = linkedListDS.contains(76);
    const value2 = linkedListDS.contains(0);

    expect(value).toEqual(true);
    expect(value2).toEqual(false);
  });
});

describe("Test for HashTable", () => {
  const hashTableDS = new HashTable(100);
  test("Test insert", () => {
    hashTableDS.insert("Nosa");
    hashTableDS.insert("Henry");
    hashTableDS.insert("Fubar");
    hashTableDS.insert(
      "The hungry lions went to play on an empty stomach, it ended up eating it's friends, such an irony it is, now the lion has no one to play with"
    );

    expect(hashTableDS._length).toBe(4);
  });

  test("Test remove", () => {
    const removed = hashTableDS.remove("Henry");
    expect(removed).toContain("Henry");
  });

  test("Test retrieve", () => {
    const randomKeySearch = () => {
      //random number from one to five
      const random = Math.floor(Math.random * 6);

      hashTableDS.retrieve(random);
    };

    const validKeySearch = hashTableDS.retrieve(3);

    expect(randomKeySearch).toThrow(Error);
    expect(validKeySearch).toEqual("Nosa");
  });
});

describe("Test for Graph", () => {
  const graphDS = new Graph(7);
  test("Test AddNode", () => {
    graphDS.addNode(8);

    expect(graphDS[8]).toEqual({
      connections: [],
      value: 8,
    });
  });

  test("Test addEdge", () => {
    graphDS.addEdge(7, 8, 10, 9, 11, 12, 13, 14);

    expect(graphDS[7].connections).toEqual([8, 10, 9, 11, 12, 13, 14]);
  });

  test("Test removeNode", () => {
    const removed = graphDS.removeNode(8);
    const removed2 = () => {
      graphDS.removeNode(8);
    };

    expect(removed.value).toBe(8);
    expect(removed2).toThrow(Error);
  });
});

describe("Test for Stack", () => {
  const stackDS = new Stack();

  test("Test push", () => {
    const push = stackDS.push({ trial: "okay" });
    const push2 = stackDS.push(["cool"]);

    expect(push).toEqual({ trial: "okay" });
    expect(push2).toEqual(["cool"]);
  });

  test("Test pop", () => {
    const remove = stackDS.pop();

    expect(remove).toEqual(["cool"]);
  });

  test("Test get", () => {
    expect(stackDS.length).toBe(1);
  });
});

describe("Test for Binary Tree", () => {
  const binaryTreeDS = new BinaryTree();
  test("Test to insert in binary tree", () => {
    binaryTreeDS.insert(7);
    binaryTreeDS.insert(9);
    binaryTreeDS.insert(1);
    binaryTreeDS.insert(10);
    binaryTreeDS.insert(2);
    binaryTreeDS.insert(0);
    binaryTreeDS.insert(8);
    binaryTreeDS.insert(11);

    expect(binaryTreeDS).toEqual({
      left: {
        left: {
          left: null,
          right: null,
          value: 0,
        },
        right: {
          left: null,
          right: null,
          value: 2,
        },
        value: 1,
      },
      right: {
        left: {
          left: null,
          right: null,
          value: 8,
        },
        right: {
          left: null,
          right: {
            left: null,
            right: null,
            value: 11,
          },
          value: 10,
        },
        value: 9,
      },
      value: 7,
    });
  });

  test("Test contains function in binary tree", () => {
    const doesNotExist = binaryTreeDS.contains(100);
    expect(doesNotExist).toBe(false);

    const exist = binaryTreeDS.contains(11);
    expect(exist).toBe(true);
  });

  test("Test sortedTraverse function in binary Tree ", () => {
    const sortedArray = binaryTreeDS.sortedTraverse();
    expect(sortedArray).toEqual([0, 1, 2, 7, 8, 9, 10, 11]);
  });
});
