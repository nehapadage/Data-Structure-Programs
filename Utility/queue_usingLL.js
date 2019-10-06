
  
class Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}
class QueueList {

    constructor() {
        this.head = null;
        this.arr = [];
        this.rear = 1;
        this.front = 1;

        this.size = 0;
    }

    enqueue(data) {
        var node = new Node(data);
        this.arr[this.rear] = data;
        this.rear++;
        this.size++;

    }
    deque() {
        var deletedData = this.arr[this.front];
        delete this.arr[this.front];
        this.front++;
        this.size--;
        console.log(deletedData, " deleted ");
        console.log();
        return deletedData;

    }
    show() {
        for (var i = 0; i < this.size; i++) {
            console.log(this.arr[this.front + i] + " ");
        }

        console.log();

    }
    sizeOfQue() {
        console.log(" size of queue is: ", this.size);

    }

    isEmpty() {
        if (this.size == 0) {
            console.log(" queue is empty");

        }
        else {
            console.log(" not empty queue");

        }
        
    }


} module.exports = {
    QueueList
}


var ql=new QueueList();
ql.enqueue(15);
ql.enqueue(25);
ql.enqueue(35);
ql.show();
ql.deque();
ql.show();
