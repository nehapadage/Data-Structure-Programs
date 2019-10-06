var input=require("../Utility/Deque")
var stack = require('../Utility/stack');
var ulist = require('../Utility/linkedlist');
var read = require('readline-sync');
var Que = require('../Utility/queue');
var util=require("../../algorithm_programs/utility_algo")
var fileStream = require('fs');

module.exports={
   
   
    palindrome_checker(string)
{
    
var dq=new input.deque();
var dq2=new input.deque();

    var strArray = string.split("");
    
   
    for(i=0;i<strArray.length;i++)
    {
        dq2.addFront(strArray[i]);
    }
   
    var flag=false;
   
    for(i=0;i<strArray.length;i++)
    {    
            flag = true;
        if((dq.addFront(strArray[i]))!== (dq2.removeFront(strArray[i])))
         {
            flag=false;
            i=strArray.length;
         }
    }
   
   return flag;
},


BalancedPara(expression,ArithmaticExpression) 
        {
            var ss = new stack.Stack();

        try {
        let ch;
        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        for (let i = 0; i < ArithmaticExpression.length; i++) {
            ch = expression.charAt(i);
        
            if ((ch == '(') || ch == '{' || ch == '[') {
            
                if (ch == '{') {
                    ss.push(ch);
                    count1++;
                }
                if (ch == '[') {
                    ss.push(ch);
                    count2++;
                } else {
                    ss.push(ch);
                    count3++;
                }


            }
    
            else if (ch == ')' || ch == '}' || ch == ']') {

                
                if (ch == '}') {
                    if (ss.isEmpty()) {
                        ss.push(ch);
                        count1++;
                        break;
                    } else {
                        ss.pop();
                        count1--;
                    }
                }
                if (ch == ']') {
                    if (ss.isEmpty()) {
                        ss.push(ch);
                        count2++;
                        break;
                    } else {
                        ss.pop();
                        count2--;
                    }
                } else {
                    if (ss.isEmpty()) {
                        ss.push(ch);
                        count3++;
                        break;
                    } else {
                        ss.pop();
                        count3--;
                    }
                }
            }
        }

       
        if (count1 == 0 && count2 == 0 && count3 == 0) {
            console.log(" expression is balanced");

        } else {
            console.log(" expression not balcned");
        }
    }
    catch (err) {
        console.log(err);
    }
},


cashCounter(amount,people) 
     {
        var queue = new Que.Queue();
            try {
           
           for (var counter = 1; counter <= people; counter++) {
            console.log("Enter person name");
            var customer = read.question();
            queue.enqueue(customer);// calling enQueue method to add name of person to q object
       
        var oldAmount = amount;
        console.log(" Old Amount : ", oldAmount);

            do {

                console.log("Welcome To Bank");
                console.log(customer + " in queue:");
                console.log("please Enter correct input : ");
                console.log("Enter 1.to Withdraw money:");
                console.log("Enter 2.to Deposit Money: ");
                choice = read.questionInt();
            

            switch (choice) {
                case 1:
                    console.log("Enter amount TO WithDraw: ");
                    var withdraw_Amount = read.questionInt();
                   

                    if (withdraw_Amount > 0 && withdraw_Amount <= amount)
                     {

                        amount = amount - withdraw_Amount;
                        console.log("Collect your money....ThankYou .. .>");

                        if (amount == 0) {
                            console.log("Cash is not present !");
                            return;
                        }
                        console.log("  Updated amount is = " + amount);

                    } 
                    else {
                        console.log("Enter Valid amount");
                    }
                  

                    break;

                case 2:
                    console.log("Enter Amount you want to Deposit");
                    var deposit_AMOUNT = read.questionInt();
                    var oldAmount = amount;
                    if (deposit_AMOUNT > 0) {

                        console.log("old amount  ", oldAmount)
                        amount = amount + deposit_AMOUNT;// updating bank amount
                        console.log("updated amount = " + amount);

                        break;
                    } 
                    else {
                        console.log("please Enter valid amount");
                        return;
                    }
                default:
                    console.log("Enter valid Input");
                    break;
            }
        } while (choice < 0 && choice >= 2)

            queue.dequeue(); // calling deQueue method to remove the person from queue after their operation
            console.log("person is removed from queue");
            queue.show();
        }
       
    }
    catch (error) {
        console.log(error);

    }
},


BinaryTree(n)
{
  var answer=Math.pow(2,n)-n;
console.log("No. of trees : "+answer);
},


Order(arr) 
 {
      try {
         
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
    
},


unOrder(arr) 
{ 
   
   try {
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

},


primerange (initial, end) 
{
    var array = []; var k = 0; var count = 0;
    var flag = 0
    for (i = initial; i <= end; i++) {
        for (j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                flag = 0
                count++
                break
            } else {
                flag = 1
            }
        }
        if (flag == 1) {
            array[k++] = i
        }

    }
    
    return array;
}



}
