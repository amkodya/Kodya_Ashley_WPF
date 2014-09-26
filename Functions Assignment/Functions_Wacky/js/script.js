//Functions_Wacky
/*

A space ship full of aliens is descending to the Earth from outer space. They need to figure out
where they are going to land. They need to land on dry land not water that is larger than their spaceship.
Also the aliens have heat sensor technology on their ship to tell if humans are nearby
The aliens need to make sure there are no humans where they are landing that will approach them in fear
as they are coming to Earth in peace and research.
Please calculate if the aliens can land in the given spot to have a safe landing

 The givens are the
 How long is spaceship
 How wide is the spaceship
 How long is the land
 How wide is the land
 Are there are humans around?

 */


var calcSpaceship = function(lspaceship, wspaceship); var calcLand = function(lland, wland); var calcHumans = function(humans){
    var spaceshipArea = lspaceship * wspaceship;
    var landArea = lland * wland;
    var landSafe = spaceshipArea - landArea;
    return landSafe;
}

var spaceArea = calcSpaceship(2, 8);
var landingArea = calcLand(2, 2);
var humansAround = calcHumans(0);


if(spaceArea - landingArea >=0 && humansAround === 0) ? console.log("The aliens can land here") : console.log("The aliens cannot land here");



