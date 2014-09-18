//Conditionals Personal

/*I want to make a 3-layered cake for my parents wedding anniversary.
All layers will be the same size and will cost the same.
I only have a certain amount of money to spend on ingredients as I still need to purchase a gift for them.
I want to figure out if I can make a 3 layer cake or if not, how many layers of cake I can make
based on the cost per layer.*/

var cakeMixPrice= prompt("How much will the cake mix cost per layer?") ;
var eggsPrice= prompt("How much will the eggs cost per layer?");
var oilPrice = prompt("How much will the oil cost per layer?");
var frostingPrice= prompt("How much will the frosting cost per layer?");
var costPresent= prompt("How much will the anniversary present be?");
var moneyAvail=prompt("How much money do you have for the cake and present?");


if( moneyAvail >= (cakeMixPrice+eggsPrice+oilPrice+frostingPrice) * 3 && moneyAvail - ((cakeMixPrice+eggsPrice+oilPrice+frostingPrice)*3)  >= costPresent ){
   alert("You can make the 3-layered cake and buy the present!");
}else if( moneyAvail >= (cakeMixPrice+eggsPrice+oilPrice+frostingPrice)* 2 && moneyAvail - ((cakeMixPrice+eggsPrice+oilPrice+frostingPrice)*2) >= costPresent ){
    alert("You can only make a double-layered cake to afford the present!");
}else if(moneyAvail >= cakeMixPrice+eggsPrice+oilPrice+frostingPrice && moneyAvail - cakeMixPrice+eggsPrice+oilPrice+frostingPrice  >= costPresent ){
    alert("You can only make a single-layered cake to afford the present!");
}else{
    alert("You have to chose between making the cake and buying the present!");
}

