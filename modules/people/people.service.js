const { Queue } = require('../queue/Queue')
const { _Node } = require('../queue/Queue')
const people = require('../../store/people')
const { fullPeopleQueue } = require('../../store/people')

// Set up initial data.
// --------------------

const people = new Queue()
people.forEach(person => fullPeopleQueue.enqueue(person))

// --------------------

module.exports = {
  show(queue) {
    // if (!queue.first) {
    //   return null;
    // }
    // else 
    return queue.first.value;
  },

  enqueue(person) {
    // Add a person to the queue.
    const node = new _Node(person);
    if (this.first === null) { this.first = node; }
    if (this.last) { this.last.next = node; }
    this.last = node;
  },

  dequeue() {
    // Remove a person from the queue.
    if (this.first === null) { return null; }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) { this.last = null }
    return node.value
  }
}
