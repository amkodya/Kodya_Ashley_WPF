//Conditionals Personal

/*I want to make a 3-layered cake for my parents wedding anniversary.
All layers will be the same size and will cost the same.
After purchasing their gift, I only have a certain amount of money to spend on ingredients.
I want to figure out if I can make a 3 layer cake or if not, how many layers of cake I can make
based on the cost per layer.*/

var cakeMixPrice=10;
var eggs=3;
var oil= 5;
var frosting= 12;

var money=50;

if(money >= (cakeMixPrice+eggs+oil+frosting)*3){
    console.log("You can make the 3-layered cake!");
}else if(money >= (cakeMixPrice+eggs+oil+frosting)*2){
    console.log("You can only make a double-layered cake!");
}else{
    console.log("You can only make a single-layered cake!");
}

