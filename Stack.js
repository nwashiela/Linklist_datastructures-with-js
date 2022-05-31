const Node = require("./node");
// const stack = Stack();

//stack.push("Andre");
//stack.push("Busi");

// console.log(stack.pop())   -- Busi
// console.log(stack.pop())   -- Andre

// how would u implement this using a linked list

module.exports = function Stack() {

	let first = null;
	let last = null;

	function push (value) {
	let node = new Node(value);
	if(!first) {
		first = node;
		last = node
	}
	else{
		let current = first
		first.setNextNode(current);
		first = node;
	}
	}

	function pop() {
		let current = first;
		if(current){
			let element = current.getValue();
			current = current.getNextNode();
			first = current
			return element
		}
		return null;
	}

	return {
		push,
		pop
	}
}