
var input1=require('../data_structure/Utility/utility')
var read=require('readline-sync')

var string=read.question("Enter any string :");

var flag=input1.palindrome_checker(string);

 
if(flag==false)
console.log("String is not Palindrome")
else
    console.log("Strings are  palindrome")



    
