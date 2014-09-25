//Functions Worksheet

//Calculate the area of a rectangle given the width and height of the rectangle.

/*Calculate the Area of a Rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log(“The Area of the Rectangle is “ + area);

function calculateArea(w, h )
{return w *h;}

 It takes 8.666666667 bee stings per pound to kill an animal.
 Calculate how many bee stings are needed to kill an animal in a function

 Given:
 Victim’s weight (in pounds)
 Parameter(s) for function:
 Victim’s weight (in pounds)
 Return:
 Number of Bee stings
 Result to print to the console:
 “It takes X bee stings to kill this animal.
*/

var calcKill = function(victimWeight){
    var killStings = victimWeight * 8.666666667;
    return killStings;
}

var kill = calcKill(250);

console.log(kill);

