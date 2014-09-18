//Conditionals Industry

/*

You are a web designer for a small company. You have a per-website budget for stock photos. For the

website you're designing, you have selected a certain number of stock photos. Decide whether you can

use the amount of photos you have selected or if you will need to cut some photos out.*/


var photosSelected = prompt("How many stock photo's have you selected?"); //number of stock photos collected
var budget = prompt("What is your stock photo budget per website?"); // budget for stock photos per website
var pricePhoto = prompt("What is the price per stock photo?"); //price per stock photo

/* stock photo budget must be greater than or equal to the total price of the stock photos.
if true "You can use all of the stock photos you've collected for your website"
if false "you need to eliminate x(#) of photos to stay within your budget*/

(budget >= photosSelected * pricePhoto) ? alert("You can use all of the stock photos you've collected for your website!") :
    alert("You need to eliminate " + (photosSelected * pricePhoto - budget)/pricePhoto + " photos to stay within your budget");
