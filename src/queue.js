const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this._head = null;
    this._last = null;
  }

  getUnderlyingList() {
    return this._head;
  }

  enqueue(value) {
    let newNode = new ListNode(value);

    if (this._head) {
      this._last.next = newNode;
      this._last = newNode;
    } else {
      this._head = newNode;
      this._last = newNode;
    }
  }

  dequeue() {
    let removingNode = this._head.value;
    this._head = this._head.next;

    return removingNode;
  }
}

module.exports = {
  Queue
};
