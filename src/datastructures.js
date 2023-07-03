//--------------ARRAY LIST ALGORITHM USING JAVASCRIPT OBJECT-------------

export class ArrayList {
  constructor() {
    this.length = 0;
  }
  push(num) {
    this[this.length] = num;
    this.length++;
  }
  pop() {
    var last = this[this.length - 1];
    delete this[this.length - 1];
    this.length--;
    return last;
  }
  get(index) {
    return this[index];
  }
  shift() {
    if (this.length > 0) {
      var answer = this[0];
      this[0] = null;
      for (let i = 0; i < this.length; i++) {
        this[i] = this[i + 1];
      }
      delete this[this.length - 1];
      this.length--;
      return answer;
    }
    return null;
  }
  delete(index) {
    var removedItem = this[index];
    this.length--;
    delete this[index];
    if (index !== this.length) {
      for (let i = index; i < this.length; i++) {
        this[i] = this[i + 1];
        delete this[i + 1];
      }
    }
    return removedItem;
  }
}

var test = new ArrayList();

// test.push(3);
// test.push(4);
// test.push(8);
// test.push(9);
// //// console.log(test.length);
// //// console.log(test);
// //// console.log(test.delete(1));
// //// console.log(test);

export class Node {
  constructor(arr) {
    this.arr = arr;
  }
  complete(string) {
    var answer = [];
    var findcheck = string.toLowerCase();
    this.arr.forEach((elem) => {
      var check = elem.toLowerCase();
      if (findcheck[0] == check[0] && check.includes(findcheck)) {
        if (answer.length < 3) {
          answer.push(check);
        }
      }
    });
    return answer;
  }
}

import { hash1, hash2, hash3 } from "./hashing-functions.js"; //personal coded hashing functions
var h1 = hash1(100);
var h2 = hash2(100);
var h3 = hash3(100);

export class BloomFilter {
  constructor() {
    this.array = new Array(100).fill(0); // makes an array of 100 elements and fill them all up with 0 i.e [0,0, 0,...]
    this.h1 = h1;
    this.h2 = h2;
    this.h3 = h3;
  }

  add(string) {
    var h1 = this.h1(string);
    var h2 = this.h2(string);
    var h3 = this.h3(string);
    this.array[h1] = 1;
    this.array[h2] = 1;
    this.array[h3] = 1;
  }
  contains(string) {
    var h1 = this.h1(string);
    var h2 = this.h2(string);
    var h3 = this.h3(string);

    if (this.array[h1] === 0 || this.array[h2] === 0 || this.array[h3] === 0) {
      return false;
    } else {
      return true;
    }
  }
}

var bf = new BloomFilter();
// // console.log(bf.contains("Brian")); //false
// // console.log(bf.contains("semona")); //false
// // console.log(bf.contains("serah")); //false
// bf.add("Brian");
// // console.log(bf.contains("Brian")); //true
// // console.log(bf.contains("semona")); //false
// // console.log(bf.contains("serah")); //false

//-------------- QUEUE (DATA STRUCTURE) ALGORITHM -------------

export class Queue {
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

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(9);
// queue.enqueue(7);
// queue.enqueue(6);
// queue.enqueue(100);
// queue.dequeue();
// queue.enqueue(78);
// queue.dequeue();

// // console.log(queue.peek());
// // console.log(queue);

//ALL ABOVE METHODS IN THE QUEUE OBJ ALL HAVE A CONSTANT TIME COMPLEXITY

//-------------- LINKED LIST (DATA STRUCTURE) ALGORITHM -------------

export class Linkedlist {
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
      // // console.log(this.previous);
      this._pointer = this._pointer.next;
    }
  }
  insertIn(position, value) {
    var currentNode = this.head;
    if (!this.contains(position))
      throw new Error(`${position}: position to be inserted doesn't exist`);
    if (position === this._pointer.value) {
      this.insert(value);
    } else {
      if (this.contains(value))
        throw new Error(`${value}: value already exist`); // Avoid duplicated values
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
    if (!this.contains(value))
      throw new Error(`${value} : value doesn't exist`);
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

    if (!this.contains(value))
      throw new Error(`${value} : value doesn't exist`);
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
// // console.log(test23.get(2));
// test23.reverseList();
// test23.remove(10);
// test23.insertIn(2, 76);
// // console.log(test23.removeTail());
// // console.log(test23.contains(10));
// // console.log(test23.removeTail());
// test23.insert(100);
// // console.log(test23);

//-------------- HASHTABLE (DATA STRUCTURE) ALGORITHM -------------

import { _hash } from "./hashing-functions.js";

export class HashTable {
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
        answer = `key: ${keys} | value: ${string}`;
        delete this._storage[keys];
        this._length--;
        return answer;
      }
      if (Array.isArray(this._storage[keys])) {
        this._storage[keys].forEach((elem, index) => {
          if (elem === string) {
            this._storage[keys].splice(index, 1);
            answer = `key: ${keys} | value: ${elem}`;
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
    throw new Error(`${key} not found`);
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
// // console.log(hashtable.retrieve(8));
// // console.log(hashtable);

// // console.log(hashtable.remove("abc"));
// // console.log(hashtable);

//-------------- GRAPH (DATA STRUCTURE) ALGORITHM  -------------

export class Graph {
  constructor(value) {
    this[value] = { value, connections: [] };
  }
  addNode(value) {
    if (!(value in this)) {
      this[value] = { value, connections: [] };
    }
  }
  addEdge(nodeA, ...rest) {
    const nodeB = [...rest];
    for (let i = 0; i < nodeB.length; i++) {
      if (nodeA in this && nodeB[i] in this) {
        if (!this[nodeA].connections.includes(nodeB[i]))
          this[nodeA].connections.push(nodeB[i]);
        if (!this[nodeB[i]].connections.includes(nodeA))
          this[nodeB[i]].connections.push(nodeA);
      } else {
        this.addNode(nodeA);
        this.addNode(nodeB[i]);
        this.addEdge(nodeA, nodeB[i]);
      }
    }
  }
  removeNode(node) {
    var temp = { ...this[node] };
    if (node in this) {
      for (let i = 0; i < this[node].connections.length; i++) {
        const nodeConnections = this[node].connections[i];
        const connectedNodes = this[nodeConnections].connections;
        const index = connectedNodes.indexOf(node);
        connectedNodes.splice(index, 1);
      }
      delete this[node];
      return temp;
    }
  }

  depthFirstTraversal(value) {
    const visited = {};
    const graph = this;
    function depthFirst(value, arr) {
      if (!(value in visited)) {
        visited[value] = true;
        arr.push(value);
        const connectedNodes = graph[value].connections;
        for (let i = 0; i < connectedNodes.length; i++) {
          depthFirst(connectedNodes[i], arr);
        }
      }
      return arr;
    }
    return depthFirst(value, []);
  }

  breadthFirstTraversal(value) {
    const visited = {};
    const arr = [...graph[value].connections];
    visited[value] = true;
    const result = [value];

    for (let i = 0; i < arr.length; i++) {
      if (!(arr[i] in visited)) {
        visited[arr[i]] = true;
        var temp = arr[i];
        result.push(arr[i]);
        arr.push(...this[temp].connections);
      }
    }
    return result;
  }
}

const graph = new Graph(7);
graph.addNode(8);
graph.addEdge(7, 8, 10, 9, 11, 12, 13, 14);
graph.removeNode(12);
graph.addNode(10);
graph.addEdge(7, 8);
graph.addEdge(7, 9);
graph.addEdge(8, 9);
graph.addEdge(9, 100);
graph.addEdge(10, 24);
graph.addEdge(12, 25);
// console.log(graph);
// console.log(graph.depthFirstTraversal(7));
// console.log(graph.breadthFirstTraversal(7));

//Stack Datastructure

class Stack {
  #length;
  constructor() {
    this.#length = 0;
  }
  push(item) {
    this[this.#length] = item;
    this.#length++;
    return item;
  }
  pop() {
    if (this.#length === 0) {
      return "Empty Stack; There is nothing in this Stack, push first";
    }
    const result = this[this.#length - 1];
    delete this[this.#length - 1];
    this.#length--;
    return result;
  }
  get length() {
    return this.#length;
  }
}

const stackDS = new Stack();
// console.log(stackDS.push({ trial: "okay" })); //{ trial: "okay" }
// console.log(stackDS.push(["cool"])); //["cool"]
// console.log(stackDS.push("working")); //"working"
// console.log(stackDS.length); //3
// console.log(stackDS.pop()); //"working"
// console.log(stackDS.length); //2
// console.log(stackDS.pop()); //["cool"]
// console.log(stackDS.pop()); //{ trial: "okay" }
// console.log(stackDS.pop()); //  "Empty Stack; There is nothing in this Stack, push first"
