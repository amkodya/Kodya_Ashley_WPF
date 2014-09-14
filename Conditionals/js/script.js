/**
 * Created by electrikoala on 9/14/14.
 */
//CONDITIONAL LOGIC - else if

var kidHeight = 47;
var minHeight = 48;
var wParentHeight = 45; //the height of the kid with a parent

//if the child is old enough, print to the console "you can ride"
//if the kid is over 48 inches in height

if(kidHeight >= minHeight){
    //code performed if condition is true
    console.log("You Can Ride the Coaster!")
}else if(kidHeight > wParentHeight){
     //you can ride with a parent present
    console.log("You can ride but only with a parent")
}else{
    //sorry you have growing to do
    console.log("Sorry kid you've got some growing to do!")
}