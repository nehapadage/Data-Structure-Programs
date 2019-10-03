
function cashCounter() {
    try {
        var read = require('readline-sync');
        var Que = require('../Utility/queue');
        var amount = 10000;
        var choice;
       console.log("Enter How many People are in Queue");
        var people = read.questionInt();
        var queue = new Que.Queue();
       
           
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
}
module.exports = cashCounter();
