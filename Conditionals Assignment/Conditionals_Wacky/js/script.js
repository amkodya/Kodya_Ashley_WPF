//Conditionals Wacky

/* A dog couple wants to adopt a human but the adoption agency requires the any dog wishing to adopt
a human to pay a fee. The couple wants to make sure they have enough money for the adoption fee, human food and a human bed.
The dog couple will only adopt the human if they can also afford the human bed and human food. Based on how much
money they dog couple has, will they be able to adopt the human?
*/


var moneyAdopt = prompt("How much money does the couple have to spend on their new human?") //money couple has for adoption
var costAdoption = prompt("What is the cost to adopt the human?") ; // cost to adopt the human
var costFood = prompt("What is the cost for one week of human food?"); // cost for 1 week fo food for the human
var costBed = prompt("What is the cost for a human bed?"); // cost for one human bed


/* the couple needs to have more money than the adoption cost of human and also enough money left over
 from adoption cost for cost of human food and bed or else they will not adopt human*/

if(moneyAdopt > costAdoption && moneyAdopt - costAdoption >=  costFood + costBed){
    console.log("The dog couple will be able to adopt the human!");
}else{
    console.log("The dog couple will not be able to adopt the human right now!");
}


