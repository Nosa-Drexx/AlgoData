function times10(n) {
  return n * 10;
}
function memoize(cb) {
  const cache = {};

  return function memoTimes10(n) {
    if (`${n} * 10` in cache) {
      console.log(`Fetching value from cache ${n} * 10`);
      return cache[`${n} * 10`];
    }
    console.log("Not cached, Calculating and chaching value");
    return (cache[`${n} * 10`] = cb(n));
  };
}

const memoClosureTimes10 = memoize(times10);
// console.log(memoClosureTimes10(9));
// console.log(memoClosureTimes10(9));
function memo() {
  var cache = {};
  return function factorial(n) {
    if (`${n}!` in cache) {
      return cache[`${n}!`];
    }
    if (n <= 1) {
      return 1;
    }
    var result = n * factorial(n - 1);
    cache[`${n}!`] = result;
    return result;
  };
}
const factorial = memo();
// console.log(factorial(5));
// console.log(factorial(6));

function linearSearch(array, find) {
  result = "not found";
  array.forEach((elem, i) => {
    if (elem === find) {
      return (result = `${elem} at index ${i}`);
    }
  });
  return result;
}
// console.log(linearSearch([2, 6, 7, 90, 103], 90));

function binarySearch(array, find) {
  var half = Math.floor(array.length / 2);

  if (array[half] == find) {
    return `${array[half]} at index ${half}`;
  } else if (array.length === 1 && array[0] !== find) {
    return "not found";
  } else if (find < array[half]) {
    return binarySearch(array.slice(0, half), find);
  } else if (find > array[half]) {
    return binarySearch(array.slice(half + 1, array.length), find);
  }
}
// console.log(binarySearch([2, 6, 7, 90, 103], 90));

function mergeSort(array) {
  var first;
  var second;
  var half = Math.floor(array.length / 2);

  function merge(left, right) {
    var result = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        result.push(left.shift());
      } else {
        result.push(right.shift());
      }
    }
    return result.concat(left, right);
  }

  if (array.length > 1) {
    first = mergeSort(array.slice(0, half));
    second = mergeSort(array.slice(half, array.length));
    return merge(first, second);
  }
  return array;
}

// console.log(mergeSort([1, 5, 7, 4, 2, 3, 6]));
class Linkedlist {
  constructor() {
    this.head = null;
    this._pointer = this.head;
    this._length = 0;
  }
  insert(elem) {
    this._length++;
    if (this.head === null) {
      this.head = {
        value: elem,
        next: this._pointer,
      };
      this._pointer = this.head;
    } else if (this._pointer.next === null) {
      if (this.contains(elem)) return "value already exists"; //Avoid repeatition of values;
      // this.previous = { ...this._pointer };
      this._pointer.next = {
        value: elem,
        next: null,
      };
      // console.log(this.previous);
      this._pointer = this._pointer.next;
    }
  }
  insertIn(position, value) {
    var currentNode = this.head;
    if (!this.contains(position))
      return "position to be inserted doesn't exist";
    if (position === this._pointer.value) {
      this.insert(value);
    } else {
      if (this.contains(value)) return "value already exist"; // Avoid duplicated values
      while (currentNode.value !== position) {
        currentNode = currentNode.next;
      }
      var temp = { ...currentNode.next };
      currentNode.next = {
        value,
        next: temp,
      };
      this._length++;
    }
  }
  InsertNewHead(value) {
    if (this.contains(value)) return "value already exist";
    var temp = { ...this.head };
    this.head = {
      value,
      next: temp,
    };
    this._length++;
  }
  isHead(node) {
    node === this.head ? true : false;
  }
  isTail(node) {
    node === this._pointer ? true : false;
  }
  get(value) {
    if (!this.contains(value)) return "value doesn't exist";
    var currentNode = this.head;
    if (currentNode.value === value) {
      return currentNode;
    } else if (this._pointer.value === value) {
      return this._pointer;
    } else {
      while (currentNode.value !== value) {
        currentNode = currentNode.next;
      }
    }
    return currentNode;
  }
  contains(value) {
    var check = this.head;
    if (check === null) return false;
    if (check.value === value) return true;

    while (check.next !== null) {
      check = check.next;
      if (check.value === value) return true;
    }
    return false;
  }
  removeHead() {
    this.head = this.head.next;
    this._length--;
  }
  remove(value) {
    var currentNode = this.head;
    var temp = null;

    if (!this.contains(value)) return "value do not exit";
    if (value === this._pointer.value) {
      this.removeTail();
    } else if (this.head.value === value) {
      this.removeHead();
    } else {
      while (currentNode["next"].value !== value) {
        currentNode = currentNode.next;
      }
      var removed = { ...currentNode.next };
      temp = { ...currentNode["next"].next };
      currentNode.next = null;
      currentNode.next = temp;
      this._length--;
      return removed;
    }
  }
  reverseList() {
    var currentNode = { ...this.head };
    var reverse = this.head;
    var counter = 0;
    while (currentNode.next !== null) {
      var temp1 = { ...reverse };
      var temp2 = { ...currentNode.next };
      reverse = temp2;
      reverse.next = temp1;
      currentNode = currentNode.next;
    }
    var test = reverse;
    while (counter < this._length - 1) {
      test = test.next;
      counter++;
    }
    test.next = null;
    this._pointer = test;
    this.head = reverse;
  }
  removeTail() {
    this._length--;
    var loop = this.head;
    var self = this;
    function rmLastNode(loop) {
      if (loop["next"]["next"] !== null) {
        return rmLastNode(loop["next"]);
      } else if (loop["next"]["next"] === null) {
        var temp = loop["next"];
        loop["next"] = null;
        self._pointer = loop;
        return temp;
      }
    }
    return rmLastNode(loop);
  }
}

var test23 = new Linkedlist();
// test23.insert(2);
// test23.insert(7);
// test23.InsertNewHead(3);
// test23.insert(99);
// console.log(test23.get(2));
// test23.reverseList();
// test23.remove(10);
// test23.insertIn(2, 76);
// console.log(test23.removeTail());
// console.log(test23.contains(10));
// console.log(test23.removeTail());
// test23.insert(100);
// console.log(test23);

class Queue {
  constructor() {
    this._length = 0;
    this._track = 0;
  }
  enqueue(value) {
    this[this._length + this._track] = value;
    this._length++;
  }
  dequeue() {
    var answer = this[this._track];
    delete this[this._track];
    this._track++;
    this._length--;
    return answer;
  }
  peek() {
    return this[this._track];
  }
}

function tesfn() {
  return "ok";
}
// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(9);
// queue.enqueue(7);
// queue.enqueue(6);
// queue.enqueue(100);
// queue.dequeue();
// queue.enqueue(78);
// queue.dequeue();

// console.log(queue.peek());
// console.log(queue);
const { hash, hash2, _hash } = require("./hashing functions");

class HashTable {
  constructor(range) {
    this._storage = {};
    this._range = range;
    this._length = 0;
  }
  insert(string) {
    var random = _hash(string, this._range);
    if (random in this._storage && this._storage[random] !== string) {
      if (!Array.isArray(this._storage[random])) {
        this._storage[random] = [this._storage[random]];
      }
      if (Array.isArray(this._storage[random])) {
        this._storage[random].push(string);
      }
    } else if (!(random in this._storage)) {
      this._storage[random] = string;
      this._length++;
    }
    if (this._length === Math.floor(this._range / 2)) this._range *= 2;
    return random;
  }
  remove(string) {
    var answer;
    for (let keys in this._storage) {
      if (this._storage[keys] === string) {
        answer = `key: ${keys} value: ${string}`;
        delete this._storage[keys];
        this._length--;
        return answer;
      }
      if (Array.isArray(this._storage[keys])) {
        this._storage[keys].forEach((elem, index) => {
          if (elem === string) {
            this._storage[keys].splice(index, 1);
            answer = `key: ${keys} value: ${elem}`;
          }
        });
      }
    }
    answer = "not found";
    return answer;
  }
  retrieve(key) {
    if (key in this._storage) {
      return this._storage[key];
    }
    return "not found";
  }
}

// var hashtable = new HashTable(100);
// hashtable.insert("kemi");
// hashtable.insert("tunde");
// hashtable.insert("shola");
// hashtable.insert("tope");
// hashtable.insert("kemi");
// hashtable.insert("advise");
// hashtable.insert("compromise");
// hashtable.insert("abc");
// console.log(hashtable.retrieve(8));
// console.log(hashtable);

// console.log(hashtable.remove("abc"));
// console.log(hashtable);
