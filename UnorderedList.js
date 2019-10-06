

var fileStream = require('fs');
var input1=require('../data_structure/Utility/utility')

 
        var string = fileStream.readFileSync('InputFile.txt', 'UTF-8');
        var arr = string.split(' ');
         console.log(arr)
         input1.unOrder(arr);

        

