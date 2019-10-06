var input1=require('../data_structure/Utility/utility')

var primenumbers = []

var startrange = 1; var endrange = 100;
isPrime();
display();

function isPrime(){
    var i = 0
    while(i < 10){      //number of rows
        
        primenumbers[i] = input1.primerange(startrange, endrange)       //function to calculate prime numbers for a range
        startrange = startrange + 100
        endrange = endrange + 100
        i++
    }
    
}

function display(){
    initial = 0; end = 100
    for (i = 0; i < 10; i++) {
        console.log("[ " + "[ " + initial + "-" + end + " ]" + " , " + "[ " + primenumbers[i] + "]" + " ]");        //printing prime numbers according to its range
        initial += 100;
        end += 100
        console.log();
    }    
}