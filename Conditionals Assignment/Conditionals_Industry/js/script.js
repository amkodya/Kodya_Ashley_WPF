//Conditionals Industry

/*

You are a web designer for a small company. You have a per-website budget for stock photos. For the

website you're designing, you have selected a certain number of stock photos. Decide whether you can

use the amount of photos you have selected or if you will need to cut some photos out.*/


var photosSelected = 469 ;
var budget = 50 ;
var pricePhoto = 3.50 ;

if (budget >= photosSelected * pricePhoto){
    console.log("You can use all of the stock photos you've collected for your website!");

}else{
    console.log("You need to cut out " + (photosSelected * pricePhoto - budget)/pricePhoto + " photos to stay within your budget");

}
