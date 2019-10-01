
//var head=null;

class LinkedList {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.head=null;
    }

    


    add(data) {

        // create a new node
        const newNode = new LinkedList(data);

        
        //special case: no items in the list yet
        if (this.head === null) {

            // just set the head to the new node
            this.head = newNode;
        } else {

            // start out by looking at the first node
            var current = this.head;

            // follow `next` links until you reach the end
            console.log(current.next);
            
            while (current.next != null) {
                current = current.next;
            }

            // assign the node into the `next` pointer
            current.next = newNode;
        }
    }

    RemoveByIndex(index) {

        // special cases: empty list or invalid `index`
        if ((this.head === null) || (index < 0)) {
            throw new RangeError(`Index ${index} does not exist in the list.`);
        }

        // special case: removing the first node
        if (index === 0) {

            // temporary store the data from the node
            const data = this.head.data;

            // just replace the head with the next node in the list
            this.head = this.head.next;

            // return the data at the previous head of the list
            return data; 
        }

        // pointer use to traverse the list
        let current = this.head;

        // keeps track of the node before current in the loop
        let previous = null;

        // used to track how deep into the list you are
        let i = 0;


        while ((current !== null) && (i < index)) {

            // save the value of current
            previous = current;

            // traverse to the next node
            current = current.next;

            // increment the count
            i++;
        }

        // if node was found, remove it
        if (current !== null) {

            // skip over the node to remove
            previous.next = current.next;

            // return the value that was just removed from the list
            return current.data;
        }

        // if node wasn't found, throw an error
        throw new RangeError(`Index ${index} does not exist in the list.`);
    }

    RemoveByValue(value)
    {
        if (this.head.data === value) {
            this.head = this.head.next;
        } else {
            var prev = this.head;
            var current = prev.next;
            while (current) {
                if (current.data === value) {
                    previous.next = current.next;
                    current = current.next;
                    break;
                } else {
                    previous = current;
                    current = current.next;
                }
            }
        }
    }

    search(value) {
        let current = this.head;
        var count = 0;

        // follow `next` links until you reach the end
        while (current.next != null) {
            
            if (current.data === value) {
                count++;
                break;
            }
            current = current.next;
            if(current.data===parseInt(value))
            count++;
        }

        if (count > 0) {
            console.log("Element found");
            return true;
        } else {
            console.log("Element not found");
            return false;
        }

    }





    display() {
        var temp;
        temp = this.head;
        while (temp) {
            console.log(temp.data);
            temp = temp.next;
        }
    }
}

module.exports= new LinkedList();

var ll = new LinkedList();
ll.add(10);
ll.add(20);
ll.add(30);
ll.display();
ll.RemoveByIndex(1);
ll.RemoveByValue(10);
ll.display();
ll.search(10);
ll.display();