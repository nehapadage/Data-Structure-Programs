

        var input1=require('../data_structure/Utility/utility')
         
        var readline = require("readline-sync");
        var expression = readline.question("Enter Arithmatic Expression to check: ");
       
        var ArithmaticExpression = expression.split("");
        console.log(ArithmaticExpression)

        input1.BalancedPara(expression,ArithmaticExpression);

        


