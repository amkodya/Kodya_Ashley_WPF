//Functions Worksheet

//Calculate the area of a rectangle given the width and height of the rectangle.

/*Calculate the Area of a Rectangle
var width = 5;
var height = 6;
var area = calculateArea(width, height);
console.log(“The Area of the Rectangle is “ + area);

function calculateArea(w, h )
{return w *h;}

 Circumference

 Calculate the circumference of a circle.

 Parameter(s) for function:
 Radius of the circle
 Return:
 Circumference of the circle
 Result to print to the console:
 “The circumference of the circle is X”;

*/

var calcCirc = function(radius){
    var diameter = radius * 2;
    var equation = diameter * 3.14159265359;
    return equation;
}

var c = calcCirc(4);

console.log(c);

