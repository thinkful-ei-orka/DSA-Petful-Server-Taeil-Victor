const { Queue } = require('../queue/Queue')
const cats = require('../../store/cats')
const dogs = require('../../store/dogs')

// Set up initial data.
// --------------------

// const pets = {
//   cats: new Queue(),
//   dogs: new Queue()
// }

cats.forEach(cat => cats.enqueue(cat))
dogs.forEach(dog => dogs.enqueue(dog))

// --------------------

module.exports = {
  // Return the pets next in line to be adopted.
  show(queue) {
    if (!queue.first) {
      return null;
    }
    else return queue.first.value;
  },

  dequeue(type) {
    // Remove a pet from the queue.
    if (this.first === null) { return null; }
    const node = this.first;
    this.first = this.first.next;
    if (node === this.last) { this.last = null }
    return node.value
  }
}
