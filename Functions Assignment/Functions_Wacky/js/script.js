//Functions_Wacky
/*

A space ship full of aliens is descending to the Earth from outer space. They need to figure out
where they are going to land. They need to land on dry land not water that is larger than their spaceship.
Also the aliens have heat sensor technology on their ship to tell if humans are nearby
The aliens need to make sure there are no humans where they are landing that will approach them in fear
as they are coming to Earth in peace and research.

 The givens are the
 How long is spaceship
 Are there are humans around?

 */


var calcJob = function(extra, current, sleep, personal){
    var hoursWorked = extra + current + sleep + personal;
    return hoursWorked;
}

var hoursTotal = calcJob(2, 8, 7, 2);

if(hoursTotal > 24){
    console.log("You won't be able to take on the new design campaign and still maintain your current schedule!");
}else if(hoursTotal === 24){
    console.log("You need to stay to a strict schedule in order to take on this new design campaign and maintain your current schedule!");
}else{
    console.log("You have time in your schedule to take on the new design campaign!");
}


