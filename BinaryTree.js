var read=require('readline-sync')
var n=read.questionInt("Enter value of n");
var answer=Math.pow(2,n)-n;
console.log("No. of trees : "+answer);






/*
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question(">>Enter no. of Nodes ", function(n) {
   var answer=Math.pow(2,n)-n;
   console.log("No. of trees : "+answer);
   rl.close();
});
*/



