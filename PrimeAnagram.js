const input = require("./Utility")
var primenumbers = []
var startrange = 1; var endrange = 100;
var isPrime = isPrime()
var display = display()

function isPrime(){
    var i = 0
    while(i < 10){      //number of rows
        primenumbers[i] = input.data.isAnagramPrime(startrange, endrange)   //calling a function to calculate prime numbers which are Anagram
        startrange = startrange + 100       //in every iteration value will be increased by 100 
        endrange = endrange + 100
        i++
    }
}

function display(){
    initial = 0; end = 100
    for (i = 0; i < 10; i++) {
        console.log("[ " + "[ " + initial + "-" + end + " ]" + " , " + "[ " + primenumbers[i] + "]" + " ]");        //displaying an output in 2d format
        initial += 100;                 //in every iteration value will be increased by 100 
        end += 100
        console.log();
    }    
}