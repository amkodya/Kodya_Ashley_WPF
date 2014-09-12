//Expressions_Personal

//I purchase yards of HDPE pipe to make hula hoops. I need to make a certain amount of hula hoops
//for a hoop order. I make my hoops in sizes of 32", 34" and 36". I need to know many many yards of
//HDPE pipe to buy in order to fill orders.
// 36 inches per yard

var hoopS32 = prompt("How many 32 inch hoops were ordered?"); // how many hoops 32"
var hoopS34 = prompt("How many 34 inch hoops were ordered?"); // how many hoops 34"
var hoopS36 = prompt("How many 36 inch hoops were ordered?"); // how many hoops 36"

var clipperPage = clipArt % webPages ; //calculating number of clip art images to be used per page modulo
var fontperPage = fontFace % webPages ; //calculating number of font's per page modulo

console.log(clipperPage); //prints it out to the console
console.log(fontperPage); //ptints it out to console

alert("You should be using" + clipperPage + "clip art images per web page."); //result prompt
alert("You should be using" + fontperPage + "font faces per web page."); //result promopt
