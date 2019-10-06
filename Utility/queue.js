class Queue 
{
    constructor()
    {
    this.front = 1;
    this.rear = 1;
    this.arr = [];
    this.size = 0;
    }
    

enqueue(data) 
{
    this.arr[this.rear] = data;
    this.rear++;
    this.size++;
}
dequeue() {

    var deletedData = this.arr[this.front];
    delete this.arr[this.front];
    this.front++;
    this.size--;
    return deletedData;


}
show () {
    for (var i = 0; i < this.size; i++) {
        console.log(this.arr[this.front + i] + " ");
    }

    console.log();

}
}
module.exports = {
    Queue
}

/*
var que=new Queue();
que.enqueue(10);
que.enqueue(20);
que.enqueue(30);
que.show();
que.dequeue();
que.show();
*/