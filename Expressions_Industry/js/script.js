//Expressions_Industry

// Student is building a website. She needs to have gather images and font faces for
// all of the web pages she has made for her website. In order to utilize all
//font faces and images on web pages, make a calculation based on how many font faces
//and how many images should be used per page.

var clipArt = prompt("How many clip art images do you have?");
var webPages = prompt("How many web pages do you have?");
var fontFace = prompt("How many font faces do you have?");

var clipperPage = webPages / clipArt;
var fontperPage = webPages / fontFace;

console.log(clipperPage); //prints it out to the console
console.log(fontperPage);

alert("You should be using" + clipperPage + "clip art images per web page.");
alert("You should be using" + fontperPage + "clip art images per web page.");

