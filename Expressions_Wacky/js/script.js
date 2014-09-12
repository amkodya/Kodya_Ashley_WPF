//Expressions_Wacky

// A clown juggling invitational contest is being held at the circus. Clown posse's from all around
// will be coming in to compete. The organizers are trying to order supplies for the contest. To keep
// everything fair, the organizers are going to give each clown the same clown nose and juggling pins.
// They need to figure out how many clown noses and juggling pins to purchase to be able to give
// each clown the same amount. In addition, the clowns will be transported into the competition
// into clown cars that each posse of clowns came in. The organizers want to put an even amount
// of clowns into each clown car for show. The average needs to be found out
// how many clowns should be in each clown car.

var clownS = prompt("How many clowns competing?"); // how many clowns?
var clownPosses = prompt("How many clown posse's?"); //number of clown posse's
var clownCars = prompt("How many clown cars?"); // number of clown cars

var clownNoses = clownS * 1; //calculating number of clown noses needed to purchase
var jugglingPins = clownS * 3 ; //calculating number of juggling pins needed


console.log(clownNoses); //prints it out to the console
console.log(jugglingPins); //ptints it out to console

alert(clownNoses + "Clown noses should be purchased"); //result prompt
alert(jugglingPins + "Juggling Pins should be purchased"); //result prompt
