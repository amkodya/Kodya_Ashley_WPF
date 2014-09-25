//Functions_Personal

/*

I just had a pool built and want to figure out how much volume of water in gallons should be added to the pool.
There is a deep end and a shallow end to the pool. Calculate the amount of gallons of water in pool.

The givens are the
width
length
shallow end height
deep end height

 */

var calcGals = function(shallow, deep, length, width){
    var height = (shallow + deep)/2;
    var volume = height * length * width;
    var gals = 7.48 * volume;
    return gals;
}

var galsPool = calcGals(4, 10, 50, 75);

console.log("Your pool has " + galsPool + " gallons of water!");