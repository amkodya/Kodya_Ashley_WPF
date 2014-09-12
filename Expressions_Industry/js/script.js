//Expressions_Industry

// Student is building a website. She needs to have gather images and font faces for
// all of the web pages she has made for her website. In order to utilize all
//font faces and images on web pages, make a calculation based on how many font faces
//and how many images should be used per page.

var webPages = prompt("How many web pages do you have?"); // how many web pages
var clipArt = prompt("How many clip art images do you have?"); //number of clip art images
var fontFace = prompt("How many font faces do you have?"); // number of font faces

var clipperPage = clipArt % webPages ; //calculating number of clip art images to be used per page modulo
var fontperPage = fontFace % webPages ; //calculating number of font's per page modulo

console.log(clipperPage); //prints it out to the console
console.log(fontperPage); //ptints it out to console

alert("You should be using " + clipperPage + " clip art images per web page."); //result prompt
alert("You should be using " + fontperPage + " font faces per web page."); //result promopt

