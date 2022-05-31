const Node = require('./node');
const LinkedList = require('./LinkedList');
const Queue = require('./Queue');
const Stack = require("./Stack")

const linkedList = LinkedList();
const queue = Queue();
const stack = Stack();

stack.push("Andre");
stack.push("Busi");


 console.log(stack.pop())   // Busi
 console.log(stack.pop())   // Andre


//   queue.enqueue("Andre")
//   queue.enqueue("Busi");
//   queue.enqueue("Ncesh");
//   queue.enqueue("lizo");

//  console.log(queue.first()); 
//  console.log(queue.last()); 
 
// console.log(queue.dequeue())  // Andre
// console.log(queue.dequeue())  // Busi
	

// linkedList.add("André");
// linkedList.add("Busiswa");
// linkedList.add("Vuyisa");
// linkedList.add("Moipone");
// linkedList.add("Ncebakazi");

// console.log(linkedList.count());
// console.log(linkedList.first()); 		// should return false
// console.log(linkedList.last()); 		// should return false

// function print (name) {
// 	console.log("--- : " + name);
// }

// linkedList.forEach(print);

// linkedList.clear();

// console.log(linkedList.count()); // should be 0

// linkedList.add("Ncebakazi");

// console.log(linkedList.count()); // should be 1

// console.log(linkedList.contains("John")); 		// should return false
// console.log(linkedList.contains("Ncebakazi")); 	// should return true
// linkedList.add("John");
// console.log(linkedList.contains("John")); 		// should return false

// console.log(linkedList.first()); 		// should return false
// console.log(linkedList.last()); 		// should return false












// console.log(linkedList.first()); 		// should return false



// console.log(linkedList.indexOf("Ncebakazi")); 	// should return 4



// {'André', next => null}
// const linkedList = Node("André");

// 	linkedList
// 		.setNextNode(Node("Busiswa"))
// 		.setNextNode(Node("Ncebakazi"))
// 		.setNextNode(Node("Vuyisa"))
// 		.setNextNode(Node("Moipone"));

// const newNode = Node("Busiswa", null);
// linkedList.setNextNode(newNode)
// 		  .setNextNode(Node("Ncebakazi", null))
// 		  .setNextNode(Node("Vuyisa"))
// 		  .setNextNode(Node("Moipone"));

// console.log(linkedList.getValue());
// console.log(linkedList.getNextNode().getValue());
// console.log(linkedList.getNextNode().getNextNode().getValue());

// console.log(linkedList
// 	.getNextNode()
// 	.getNextNode()
// 	.getNextNode().getValue());

// console.log(linkedList.getNextNode().getValue());

// how do I know I am at the end of a linked list

// let currentNode = linkedList;

// while (true) {
// 	console.log(currentNode.getValue());
// 	// if the next node is null I am at the end of the linked list...
// 	if (currentNode.getNextNode() == null) {
// 		break;
// 	}
// 	// there are more items in the list
// 	currentNode = currentNode.getNextNode();
// }

