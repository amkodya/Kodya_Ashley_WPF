//Expressions_Wacky

// A clown juggling invitational contest is being held at the state fair. Clown's from surrounding circus'
// will be coming in to compete. The organizers are trying to order supplies for the contest. To keep
// everything fair, the organizers are going to give each clown the same clown nose and juggling pins.
// They need to figure out how many clown noses and juggling pins to purchase to be able to give
// each clown the same amount. In addition, the clowns will be transported into the competition
// into clown cars that each posse of clowns came in. The organizers want to put an even amount
// of clowns into each clown car for show. The average needs to be found out
// how many clowns should be in each clown car.

var clownS = prompt("How many clowns competing?"); // how many clowns?

var clownNoses = clownS * 1; //calculating number of clown noses needed to purchase
var jugglingPins = clownS * 3 ; //calculating number of juggling pins needed

console.log(clownNoses); //prints it out to the console
console.log(jugglingPins); //prints it out to console

alert(clownNoses + "Clown noses should be purchased"); //result prompt
alert(jugglingPins + "Juggling Pins should be purchased"); //result prompt

var clownCirc1 = prompt("How many clowns in 1st circus' car?"); //number of clowns in clown circus 1
var clownCirc2 = prompt("How many clowns in 2nd circus' car?"); //number of clowns in clown circus 2
var clownCirc3 = prompt("How many clowns in 3rd circus' car?"); //number of clowns in clown circus 3
var clownCirc4 = prompt("How many clowns in 4th circus' car?");//number of clowns in clown circus 4
var clownCirc5 = prompt("How many clowns in 5th circus' car?");//number of clowns in clown circus 5

var clownCars = [clownCirc1, clownCirc2, clownCirc3, clownCirc4, clownCirc5];
var total = (clownCars[0] + clownCars[1] + clownCars[2] + clownCars[3] + clownCars[4]) / 5;

alert("There should be " + total + " clowns per clown car");
