
         var input1=require('../data_structure/Utility/utility')
        var read = require('readline-sync');
      //  var Que = require('../data_structure/Utility/queue');
        var amount = 10000;
        var choice;
       console.log("Enter How many People are in Queue");
        var people = read.questionInt();
       

        input1.cashCounter(amount,people);

     

