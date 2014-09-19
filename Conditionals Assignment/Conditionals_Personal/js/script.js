//Conditionals Personal

/*I want to make a 3-layered cake for my parents wedding anniversary.
All layers will be the same size and will cost the same.
I only have a certain amount of money to spend on ingredients as I still need to purchase the gift for them.
I want to figure out if I can make a 3 layer cake or if not, how many layers of cake I can make
based on the cost per layer.*/

var money = prompt("How much money do you have for the cake and present?"); // money available to buy present and cake
var layerCost = prompt("How much will the cake mix cost per layer?"); // cost of the cake mix per layer
var costPresent = prompt("How much will the anniversary present be?"); // cost of the anniversary present


/*  money left over after present purchased moneyAvail - costPresent
 If the cost of 3 layers of cake is less than or equal too the money left over after buying the present
 I can make a 3 layer cake. If the cost of 2 layers of cake is less than or equal too the money left over after buying the present
 I can make a 2 layer cake. If the cost of 1 layer of cake is less than or equal too the money left over after buying the present
 I can make a single layer cake. */

if(money - costPresent >= layerCost * 3){

    console.log("You can make the 3-layered cake and buy the present!");

}else if(money - costPresent  >= layerCost * 2){

    console.log("You can only make a double-layered cake to afford the present!");

}else if(money - costPresent  >= layerCost){

    console.log("You can only make a single-layered cake to afford the present!");

}else{
    console.log("You have to chose between making the cake and buying the present!");

}


