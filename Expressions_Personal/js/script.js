//Expressions_Personal

//I purchase yards of HDPE pipe to make hula hoops. I need to make a certain amount of hula hoops
//for a hoop order. I make my hoops in sizes of 32", 34" and 36". I need to know many many yards of
//HDPE pipe to buy in order to fill orders.
// 36 inches per yard

var hoopS32 = prompt("How many 32 inch hoops were ordered?"); // how many hoops 32"
var hoopS34 = prompt("How many 34 inch hoops were ordered?"); // how many hoops 34"
var hoopS36 = prompt("How many 36 inch hoops were ordered?"); // how many hoops 36"

var incheS32 = hoopS32 * 32; //calculating number of inches needed for 32" hoops
var incheS34 = hoopS34 * 34; //calculating number of inches needed for 34" hoops
var incheS36 = hoopS36 * 36; ///calculating number of inches needed for 36" hoops

var totalInches = incheS32 + incheS34 + incheS36; // total number of inches for all hoops
var totalYards = totalInches / 36; // number of yards needed to purchase to complete orders


console.log(totalYards); //prints it out to the console


alert("You should be purchase" + totalYards + "of HDPE pipe to complete hoop orders."); //result prompt
