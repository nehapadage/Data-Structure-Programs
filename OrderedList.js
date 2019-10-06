
var input1=require('../data_structure/Utility/utility')


var fileStream = require('fs');


        var string = fileStream.readFileSync('NumFile.txt', 'UTF-8');
        var arr = string.split(' ');
         //console.log(arr);

        input1.Order(arr);
 

