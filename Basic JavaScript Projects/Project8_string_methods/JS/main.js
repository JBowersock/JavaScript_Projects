//research and define the toUpperCase() method (below);
let text1= "Hello World!"; //declared a variable
let result1= text1.toUpperCase(); //declared a variable
document.write(result1) //wrote string to document stream [result: string capitalized.]

    document.write("<br>") //line break.
    document.write("<br>") //line break.

//research and define the search() method (below);
let text2= "Mr. Blue has a blue house."; //declared a variable
let position= text2.search("Blue"); //declared a variable
document.write(position) //wrote string to document stream [result: returns index position of first letter in the word, which was position 4.]

    document.write("<br>") //line break.
    document.write("<br>") //line break.

//research and define the toFixed() method (below);
let num= 5.56789 //declared a variable
let n= num.toFixed() //declared a variable
document.write(n) //wrote string to document stream. [result: value rounded up to 6.]

    document.write("<br>") //line break.
    document.write("<br>") //line break.

//research and define the valueOf() method (below);
let text3= "Hello Again!"; //declared a variable
let result2= text3.valueOf(); //declared a variable
document.write(result2) //wrote string to document stream [result: returns primitive value.]

function fullSentence() { //assigned a 'concat method' function.
    var part1= "I have "; //assigned a variable.
    var part2= "made this "; //assigned a variable.
    var part3= "into a complete "; //assigned a variable.
    var part4= "sentence."; //assigned a variable.
    var wholeSentence= part1.concat(part2, part3, part4); //assigned a variable.
    document.getElementById("concatenate").innerHTML= wholeSentence; //returned an element with a specified value.
}

function sliceMethod() { //assigned a 'slice method' function.
    var sentence= "All work and no play makes Johnny a dull boy."; //assigned a variable.
    var section= sentence.slice(27,33); //assigned a variable.
    document.getElementById("slice").innerHTML= section; //returned an element with a specified value.
}

function stringMethod() { //assigned a 'string method' function.
    var x= 182; //assigned a variable.
    document.getElementById("numbersToString").innerHTML= x.toString(); //returned an element with a specified value.
}

function precisionMethod() {//assigned a 'precision method' function.
    var y= 12938.3012987376112; //assigned a variable.
    document.getElementById("precision").innerHTML= y.toPrecision(10); //returned an element with a specified value.
}