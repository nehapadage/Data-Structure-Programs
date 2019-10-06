
class Node {
    constructor(data,next) {
        this.data = data;
        this.next = next;
    }
}
class StackList {

    constructor() {
        this.head = null;
        this.arr = [];
        this.top = 1;
        this.size = 0;
    }
    push(data) {

        var node = new Node();
       
        if (node == null)//Checking wheather the node is empty or not
        {
            console.log("Stack overflow");
            return;
        }
        node.data = data;// Storing data
        node.next = this.top;//changing the reference value
        this.top = node;
        this.size++;
    }

    pop() {
        if (this.top == null)//Checking wheather the top is null or not
        {
            console.log("Stack underflow");
            return null;
        }
        var dat = this.top.data;
        this.top = this.top.next;
        return dat;
    }
    isEmpty() {
        return this.top == 0;
    }
    show() {


        console.log(this.top);
        console.log();
    }
}   
module.exports = {
    StackList
}

/*
var stack=new StackList();
stack.push(10);
stack.push(20);
stack.push(30);
stack.show();
stack.pop();
stack.show(); 
*/