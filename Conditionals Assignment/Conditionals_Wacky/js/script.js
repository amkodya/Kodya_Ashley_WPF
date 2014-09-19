//Conditionals Wacky

/* A dog baseball team called "The Boxers" are gearing up the face their rivals, a cat team named "The Maincoons".
In order for this game to take place, there are many variables to this baseball game since both teams require certain aspects.
The temperature has to be between a range in order to keep all the animals safe. Also, the cats are afraid of
water so the game cannot be played if raining. As long as these conditions are met, the game will go on.
*/



var temperature = prompt("What is the current temperature") ;
var raining = prompt("Is it raining?") ;




if( raining = false && 75 >= temperature >= 40){
    console.log("The baseball game between the dogs and cats can be played!");
}else{
    console.log("The game between the dogs and cats must be postponed");
}


