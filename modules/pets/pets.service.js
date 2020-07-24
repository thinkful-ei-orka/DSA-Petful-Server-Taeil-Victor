const { Queue } = require('../queue/Queue')
const store = require('../../store/store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

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
