class _Node {
     constructor(value, next) {
          this.value = value;
          this.next = next;
     }
}

class Queue {
     constructor() {
          this.first = null;
          this.last = null;
     }

     enqueue(data) {
          const node = new _Node(data);
          if (this.first === null) { this.first = node; }
          if (this.last) { this.last.next = node; }
          this.last = node;
     }

     dequeue() {
          if (this.first === null) { return null; }
          const node = this.first;
          this.first = this.first.next;
          if (node === this.last) { this.last = null }
          return node.value
     }
}

function show(queue) {
     if (!queue.first) {
     return null;
     }
     else return queue.first.value;
}

function all(queue) {
     let currNode = queue.first;
     if (currNode === null) {
          console.log('Empty')
     }
     while (currNode.next !== null) {
          console.log(currNode.value);
          currNode = currNode.next
     }
     console.log(currNode.value)
}

function isEmpty(queue) {
     if (queue.first === null) {
          return true;
     }
     else return false
}

module.exports = {
     _Node,
     Queue,
     show,
     all,
     isEmpty
}