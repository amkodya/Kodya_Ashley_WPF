//Functions_Industry

/*

 I am being hired to take on an additional design campaign work which will take on extra hours at my job.
 With the amount of hours I already work, I need to figure out if I can handle the extra workload and
 still get my current job done and have time for myself. Calculate if I can take on this new position.

 The givens are the
 How many extra hours will campaign be per day?
 How many hours a day at current position?
 Sleep time needed
 Personal Time needed

 */

var calcJob = function(extra, current, sleep, personal){
    var hours = extra + current + sleep + personal;
    return hours;
}

var hoursTotal = calcJob(4, 10, 7, 2);

if(hoursTotal > 24){
    console.log("You won't be able to take on the new design campaign and still maintain your current schedule!");
}else if(hoursTotal = 24){
    console.log("You need to stay to a strict schedule in order to take on this new design campaign and maintain your current schedule!");
}else{
    console.log("You have time in your schedule to take on the new design campaign!");
}


