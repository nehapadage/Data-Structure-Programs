
function BalancedPara() {
    try {

        var stack = require('../Utility/stack');
        var readline = require("readline-sync");
        var expression = readline.question("Enter Arithmatic Expression to check: ");
        var ss = new stack.Stack();

        var ArithmaticExpression = expression.split("");
        console.log(ArithmaticExpression)
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
}
module.exports = BalancedPara();


