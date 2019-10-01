var input= require('../Neha Data Structure/Utility/linkedlist');
var util=require('../Neha Algorithm/Utility_Algo/utility_algo')
var access=require('readline-sync')

const fs = require('fs')



console.log(readfile());

var paragraph; var singleword = []; var keyword;
var arrayofelements = []; var count = 0;

function readfile() 
{
	fs.readFile('InputFile.txt', (err, data) => 
	{
        paragraph = data.toString();
        console.log(paragraph);
        
        keyword = access.question("Enter any keyword to search");
        console.log(keyword);
        
	   
		singleword = paragraph.split(" ");
		
		var start=0;
		var end=singleword.length-1;

		
		
    
        if (util.BinarySearch(singleword, keyword, parseInt(start),parseInt(end))) {
            console.log("Keyword is present in the file");
            console.log(input.RemoveByValue(keyword));
        } else {
            console.log("Keyword not found");
            console.log(input.add(keyword));
		}
		
    })
}
		