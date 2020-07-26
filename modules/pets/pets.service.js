const { Queue } = require('../queue/Queue')
const cats = require('../../store/cats')
const dogs = require('../../store/dogs')

// Set up initial data.
// --------------------

const cats = new Queue()
const dogs = new Queue()
const pets = new Queue()

cats.forEach(cat => fullCatQ.enqueue(cat))
dogs.forEach(dog => fullDogQ.enqueue(dog))
pets.forEach(pet => fullPetQ.enqueue(pet))

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
