


class Node
 {
    constructor(element)
    {
        this.value = element;
        this.next = null;
    }
 }

class deque 
{
    constructor()
    {
    this.front = null;
    this.rear = null;
    }
    

 
addFront(element)
 {
    // make new node.
    let node = new Node(element);
    // if dequeue is initially empty.
    if (this.front == null) {
        this.front = node;
        this.rear = node;
    }
    else {
        // add  node in front.
        this.front.next = node;
        this.front = node;
    }
    
    return node.value;
}

addrear(element) 
{
    // make new node.
    let node = new Node(element);
    // if dequeue is initially empty.
    if (this.front == null) {
        this.front = node;
        this.rear = node;
        // console.log(element + " added");
    }
    else {
        // console.log(element + " added rear");
        node.next = this.rear;
        this.rear = node;
    }
    return data=this.front.value;
}


removeRear()
 {
    // if dequeue is empty.
    if (this.rear == null) {
        return false;
    }
    // if last element in dequeue is to removed.
    if (this.rear == this.front) {          //check if only one node
        let data = this.rear.value;
        this.rear = null;
        this.front = null;
        console.log(data+" removed");
        return data;
    }
    // remove from rear.
    else {
        let data = this.rear.value;
        this.rear = this.rear.next;
        console.log(data+" removed");
        return data;
    }
}


removeFront()
{
    // dequeue is initially empty.
    if (this.front == null) {
        return false;
    }
    // if last element in dequeue is to remove.
    if (this.rear == this.front) {
        let data = this.front.value;
        this.rear = null;
        this.front = null;
       // console.log(data+" removed");
        return data;
    }
    else {
        let data = this.front.value;
        let temp = this.rear;
        while (temp.next != this.front) {
            temp = temp.next;
        }
        this.front = temp;
        this.front.next = null;
        // console.log("removed");
        return data;
    }
}


isEmpty() 
{
    // if front and rear are null dequeue is empty
    if (this.front == this.rear == null) {
        return true;
    }
    return false;
}

print()
 {
    let temp = this.rear;
    while (temp != null) 
    {
        console.log(temp.value);
        temp = temp.next;
    }
}
}
module.exports = {deque}

/*

var dq=new deque();
dq.addFront('r');
dq.addFront('aaaaaaa');
dq.addFront('d');
dq.addFront('a');
dq.addFront('r');
dq.print();
dq.addrear('m');
dq.print();
*/