//Conditionals Industry

/*

You are a web designer for a small company. You have a per-website budget for stock photos. For the

website you're designing, you have selected a certain number of stock photos. Decide whether you can

use the amount of photos you have selected or if you will need to cut some photos out.*/


var photosSelected = prompt("How many stock photo's have you selected?");
var budget = prompt("What is your stock photo budget per website?");
var pricePhoto = prompt("What is the price per stock photo?");

(budget >= photosSelected * pricePhoto) ? alert("You can use all of the stock photos you've collected for your website!") :
    alert("You need to eliminate " + (photosSelected * pricePhoto - budget)/pricePhoto + " photos to stay within your budget");
