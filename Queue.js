const Node = require("./node");

module.exports = function Queue() {
  let frontNode = null;
  let backNode = null;
  let length = 0;

  function first() {
    return frontNode.getValue();
  }

  function last() {
    return backNode.getValue();
  }

  function enqueue(value) {
    if (frontNode === null) {
      frontNode = Node(value, null);
      backNode = frontNode;
    } else {
      const newNode = Node(value, null);
      // link to the next node
      backNode.setNextNode(newNode);
      // the new node becomes the last node
      backNode = newNode;
    }
  }

  function dequeue() {
    console.log('================================>');
    // console.log(frontNode.value);
    if (frontNode) {
      let current = frontNode.getValue();
      
      // console.log('-------->');
    //  console.log(current);
      if (current) {
        frontNode = frontNode.getNextNode();
        return current;
      }
    }

    return null;
  }

  return {
    first,
    last,
    enqueue,
    dequeue,
  };
};

// const queue = Queue();

// queue.enqueue("Andre")
// queue.enqueue("Busi");

// console.log(queue.dequeue())  -- Andre
// console.log(queue.dequeue())  -- Busi
