//Conditionals Personal

/*I want to make a 3-layered cake for my parents wedding anniversary.
All layers will be the same size and will cost the same.
I only have a certain amount of money to spend on ingredients as I still need to purchase a gift for them.
I want to figure out if I can make a 3 layer cake or if not, how many layers of cake I can make
based on the cost per layer.*/

var cakeMixPrice= prompt("How much will the cake mix cost per layer?") ;
var eggs= prompt("How much will the eggs cost per layer?");
var oil= prompt("How much will the oil cost per layer?");
var frosting= prompt("How much will the frosting cost per layer?");
var costPresent= prompt("How much will the anniversary present be?");
var money=prompt("How much money do you have for the cake and present?");


if(money >= (cakeMixPrice+eggs+oil+frosting)*3 && money - ((cakeMixPrice+eggs+oil+frosting)*3) === costPresent ){

    alert("You can make the 3-layered cake and buy the present!");
}else if(money >= (cakeMixPrice+eggs+oil+frosting)*2 && money - ((cakeMixPrice+eggs+oil+frosting)*2) === costPresent){
    alert("You can only make a double-layered cake to afford the present!");
}else if(money >= cakeMixPrice+eggs+oil+frosting && money - (cakeMixPrice+eggs+oil+frosting) === costPresent){
    alert("You can only make a single-layered cake to afford the present!");
}else{
    alert("You have to chose between making the cake and buying the present!");
}

