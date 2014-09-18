//Conditionals Industry



/*Industry

You am a web designer for a small company. You have a per website budget for stock photos. For the

website you're designing, you have selected a certain number of stock photos. Decide whether you can

use the amount of photos you have selected or if you will need to cut some photos out.*/


var photosSelected:34 ;
var budget:100 ;
var pricePhoto:2.54 ;

if( budget >= (photosSelected * pricePhoto) ){

    console.log(“You can use all the photo's you've collected for this project”);

}else{

    console.log(“You need to cut out ”+ ((photosSelected * pricePhoto) – budget) / pricePhoto + “

photos to stay within your budget”);

}
