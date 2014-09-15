//Conditionals Worksheet

/*Last Chance for Gas!

A driver has to determine if they can make it across the desert with their current fuel.
They are about to past the last gas station for the next 200 miles and they need to determine
whether they should stop now for gas or not.


Given:
Gas efficiency of the car (in mpg)
Gauge reading of the gas tank (in %)
Car’s gas tank capacity (in gallons)
Result To Print Out:
    “Yes, you can make it without stopping for gas!”
    or “You only have X gallons of gas in your tank, better get gas now while you can!”*/

var milesPerGal = 30;
var gaugeReading = 13;
var tankCap = 15;

needGas = ((milesPerGal * tankCap) * (gaugeReading/100) > 200) ? "Yes you can make it without stopping for gas" : "You do not have enough as gas in your tank, better get gas now while you can";
console.log(needGas);






