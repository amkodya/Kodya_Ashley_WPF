//Functions Screencast - Variable Scope

/* function functionName( ){
    //code the function runs
} */

var width = 5;

function calcArea(){
    var width = 20;
    var height = 30;
    var area = width * height;
    console.log(area);
}

calcArea();
calcArea();
calcArea();