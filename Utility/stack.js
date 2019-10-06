
 
class Stack 
{
    constructor()
    {
        this.top = -1;
    this.arr = [];

    }
    

push(data) {
    var size = ++this.top;
    this.arr[size] = data;
}

pop()
{
    var size = this.top;
    var deletedData;

    if (size) {
        deletedData = this.arr[size];

        delete this.arr[size];
        this.top--;

        return deletedData;
    }
}
isEmpty ()
{
    if( this.top===-1)
    return true;
    else 
    return false;
}
show() {


    for (var i = 0; i <= this.top; i++) {
        console.log(this.arr[i] + " ");
    }

    console.log();

}
}

module.exports = { Stack }

/*
var sta=new Stack();
sta.push(15);
sta.push(25);
sta.push(35);
sta.show();
sta.pop();
sta.show(); 
*/