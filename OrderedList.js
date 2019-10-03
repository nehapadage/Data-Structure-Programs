

function Order() {
    var read = require('readline-sync');
    var ulist = require('../Utility/linkedlist');
   var util=require("../Utility/utility_algo")
    var fileStream = require('fs');
    try {
        var string = fileStream.readFileSync('NumFile.txt', 'UTF-8');
        var arr = string.split(' ');
         //console.log(arr);
         
         arr=util.insertionSort(arr);

        var ll = new ulist.LinkedList;

        for (let i = 0; i < arr.length; i++) {

            ll.insert(arr[i]);
        }

        ll.show();


        console.log(" Enter the Number you want to search : ");
        var answer =read.questionInt();

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
        

        fileStream.writeFileSync('NumFile.txt', word);

        var string = fileStream.readFileSync('NumFile.txt', 'UTF-8');
        var arr = string.split(' ');
         
         
         util.insertionSort(arr);

      
        

      

    } catch (error) {
        console.log(error);
    }
    
}
module.exports = Order();
