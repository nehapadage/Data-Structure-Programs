

function calender(month, year) 
{
        var input=require('../algorithm_programs/utility_algo')
        var util=require('../functional_programs/utility/utility')

        let months = [" ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
            "November", "December"]
        let days = ["  sun", "mon", "tue", "wed", "thu", "fri", "sat"];
        let monthDays = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

        if (month == 2 && util.LeapYear(year))
            monthDays[month] = 29;


        let startday = input.dayofweek(1,month,year);

        console.log("            " + months[month] + " - " + year);
        // week days
        console.log(days[0] + "  " + days[1] + "  " + days[2] + "  " + days[3] + "  " + days[4] + "  " + days[5] + "  " + days[6]);

        var numberofDays = monthDays[month];

       
        console.log("\n\n");
        return startday;

    }





function calenderFun() {

    try {
        var read = require('readline-sync');

        // take month
        let month = read.question("Enter the month");
        
        // take year
        let year = read.question("Enter the year");
    
        var day = calender(month, year);
        var arr = [];
        arr.push(month);
        arr.push(year);
        arr.push(day);
        return arr;
        //return [month,year]
    }
    catch (err) {
        console.log(err)
    }

}
//module.exports = calenderFun();


console.log(calenderFun());

