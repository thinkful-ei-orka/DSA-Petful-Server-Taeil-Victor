const { Queue } = require('../modules/queue/queue')

     const people = [
          'Randy Lahey',
          'Trevor Cory',
          'Jim Lahey'
     ]

function peopleQ(arr) {
     let peopleQueue = new Queue();

     for (let i = 0; i < arr.length; i++) {
          peopleQueue.enqueue(arr[i])
     }
     return peopleQueue
}

const fullPeopleQueue = peopleQ(people)

module.exports = {
     fullPeopleQueue,
     people
}