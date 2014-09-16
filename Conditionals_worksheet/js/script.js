//Conditionals Worksheet

/* A student earns a number grade at the conclusion of a course at Full Sail.
 Determine the appropriate letter grade for that number using conditional statements.

 Assume grades are whole numbers that never go below 0 or above 100.
 Use the FullSail Grade scale.
 There should be only one print out to the console.
 Given:
 Grade (in percent)
 Result To Print Out:
 “You have a X%, which means you have earned a(n) X in the class!” */

var grade = 84;

if(grade >= 90){

    console.log("You have a "+ grade +"%, which means you have earned an A in the class");
}else if(grade >= 80){

    console.log("You have a "+ grade +"%, which means you have earned a B in the class");

}else if(grade >= 70){
    console.log("You have a "+ grade +"%, which means you have earned a C in the class");

}else if(grade >= 65){
    console.log("You have a "+ grade +"%, which means you have earned a D in the class");

}else{
    console.log("You have a " + grade + "%, which means you have earned an F in the class");

}


