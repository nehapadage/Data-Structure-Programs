
 
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(data) {

        let node = new Node();
        node.data = data;


        if (this.head == null) {
            this.head = node;
            this.size++;
            return;
        } else {

            let curr = this.head;
            while (curr.next != null) {
                curr = curr.next;
            }
            this.size++;
            curr.next = node;
        }
        return;
    }
    show() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data + " ";
            if (curr.next != null) {
                str = str + "  ";
            }
            curr = curr.next;
        }
        //console.log(str);
        return str;

    }

    search(item) {
        if (this.head == null) {
           // console.log("Element not found");
            
            return false;
        }
        var curr = this.head;
        while (curr) {
            if (curr.data == item) {
             //   console.log("Element found");
                
                return true;
            }
            curr = curr.next;
        }
        console.log("Element not found");
        
        return false;
    }
    remove(data) {
        var curr = this.head;
        if (curr.data == data) {
            this.deleteFirst();
            return;
        }
        var pre = curr;
        while (curr) {
            if (curr.data == data) {
                pre.next = curr.next;
                this.size--;
                return curr.data;
            }
            pre = curr;
            curr = curr.next;
        }
        return false;


    }
    deleteFirst() {
        if (this.head == null) {

            this.isEmpty();
            return;
        }
        var temp = this.head.data;
        this.head = this.head.next;
        this.size--;
        return temp;
    }

    getData() {
        var curr = this.head;
        var str = "";
        while (curr) {
            str = str + curr.data;
            if (curr.next != null) {
                str = str + " ";
            }
            curr = curr.next;
        }
        return str;
    }




}

module.exports = {

    LinkedList
}

/*
var ll=new LinkedList();
ll.insert(50);
ll.insert(60);
ll.insert(70);
ll.show();
ll.search(70);
ll.show();
ll.remove(70);
ll.show();
console.log("**************");
console.log(ll.getData());
*/

