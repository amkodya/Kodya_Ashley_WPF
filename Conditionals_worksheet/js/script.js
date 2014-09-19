//Conditionals Worksheet

/* Movie Ticket Price
 The local movie theater in town has a ticket price of $12.00
 but if you are a senior (55 and older), under 10 you get the discounted price of $7.00.
 In addition, if a customer is seeing a movie between 3pm and 5pm they can also get the discounted price.
 Determine which of the two prices the customer is eligible for.

 Given:
 Time of Movie (Assume whole numbers here)
 Age of the customer
 Result To Print Out:
 “The ticket price is X”
 Deliverables

 Commit your work to your GitHub.com repository. */

var timeMovie= prompt("What time is the movie?");
var customerAge= prompt("What age is the customer?");


if(5 >= timeMovie >= 3 || customerAge <= 55 || customerAge >= 10){
    console.log("The ticket price is $7.00");
}else{
    console.log("The ticket price is $12.00");
}


