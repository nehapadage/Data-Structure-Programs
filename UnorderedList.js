

function unOrder() {
    var read = require('readline-sync');
    var ulist = require('../Utility/linkedlist');
   
    var fileStream = require('fs');
    try {
        var string = fileStream.readFileSync('InputFile.txt', 'UTF-8');
        var arr = string.split(' ');
         console.log(arr)
        var ll = new ulist.LinkedList;
        for (let i = 0; i < arr.length; i++) {

            ll.insert(arr[i]);
        }
        ll.show();

        console.log(" Enter the string you want to search : ");
        var answer =read.question();

        //answer=toString(answer);

        
        if (ll.search(answer)) {
            console.log(" element found ");
            console.log(" removing element from linked list");
            ll.remove(answer);
            console.log(answer, "removed successfully ")
        }
        else {
            console.log("Element is not Found in file: \n");
            console.log(" Adding Element to file : ");
            ll.insert(answer);
        }
        

        var word = ll.getData();
        

        fileStream.writeFileSync('InputFile.txt', word);
        console.log(" list of elements are: ");
        ll.show();
        

        

    } catch (error) {
        console.log(error);
    }
    
}
module.exports = unOrder();
