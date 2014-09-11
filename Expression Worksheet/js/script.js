//Expression Worksheet

var origPrice = 350;
var disCount = 40;
var salesTax = 4.5;

priceSubtracted = origPrice * (disCount / 100);
priceNotax = origPrice - priceSubtracted;
taxPercent = salesTax / 100;
taxAmount = (taxPercent * priceNotax);
priceTax = taxAmount + priceNotax;

console.log(priceNotax);
console.log(priceTax);