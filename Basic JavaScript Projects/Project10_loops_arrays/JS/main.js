var e= 82; //assigned variable.
document.write(e); //wrote string to document stream.
{ //created 'block scope'.
    let e= 33; //assigned let.
    document.write("<br>" + e); //wrote string to document stream.
} //closed 'block scope'.
document.write("<br>" + e); //wrote string to document stream.

    document.write("<br>"); //line break.
    document.write("<br>"); //line break.

var f= 82; //assigned variable.
document.write(f); //wrote string to document stream.
{ //created 'block scope'.
    var f= 33; //assigned variable.
    document.write("<br>" + f); //wrote string to document stream.
} //closed 'block scope'.
document.write("<br>" + f); //wrote string to document stream.

    document.write("<br>"); //line break.
    document.write("<br>"); //line break.

function countToTen() { //assigned a 'counting loop' function.
    var digit= ""; //assigned variable.
    var x= 1; //assigned variable.
    while (x<11) { //assigned while sub-function.
        digit += "<br>" + x; //note: <br> for line spacing.
        x++; //incrememnt (add one) to variable.
    } //closed sub-function.
    document.getElementById("countingToTen").innerHTML= digit; //wrote string to document stream.
} //closed 'counting loop' function.

function stringLength() { //assigned a 'length' function.
    let text = "Hello World!"; //assigned let.
    let length = text.length; //assigned let.
    document.getElementById("length").innerHTML=length; //wrote string to document stream.
} //closed 'length' function.

var instruments= ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"]; //assigned variable.
var content= ""; //assigned variable.
var y; //assigned variable.
function forLoop() { //assigned a 'for loop' function.
    for (y= 0; y < instruments.length; y++) { //assigned 'for'. [note: ++ jumps to following 'content' variable.
    content += instruments[y] + "<br>"; //writes variable and provides line break.
    } //closed 'for'.
    document.getElementById("listOfInstruments").innerHTML= content; //wrote string to document stream.
} //closed 'for loop' function.

function arrayFunction() { //assigned 'array' function.
    var catPicture= []; //assigned variable.
    catPicture[0]= "sleeping"; //assigned index property.
    catPicture[1]= "playing"; //assigned index property.
    catPicture[2]= "eating"; //assigned index property.
    catPicture[3]= "purring"; //assigned index property.
    document.getElementById("array").innerHTML= "In this picture, the cat is " + catPicture[2] + "."; //wrote string to document stream.
} //closed 'array' function.

function constantFunction() { //assigned 'constant' function.
    const musicalInstrument= {type: "guitar", brand: "fender", color:"black"}; //assigned constant.
    musicalInstrument.color= "blue"; //assigned index property.
    musicalInstrument.price= "$900"; //assigned index property.
    document.getElementById("constant").innerHTML= "The cost of the " + musicalInstrument.type + " was " + musicalInstrument.price; //
} // closed 'constant' function.

var c= 13; //assigned variable.
c= 9; //assigned value.
document.write(c); //wrote string to document stream.
// [result: 7. note: this is a demonstration that the browser will display whichever 'same value' came last.]

const d= 12; //assigned constant.
d= 2; //assigned value.
document.write(d); //wrote string to document stream.
// [result: no result. note: no displayed result due to conflicting value entries.]

var e= 82; //assigned variable.
document.write(e); //wrote string to document stream.
{
    let e= 33; //assigned let.
    document.write("<br>" + e); //wrote string to document stream.
}
document.write("<br>" + e); //wrote string to document stream.

var f= 82; //assigned variable.
document.write(f); //wrote string to document stream.
{
    let f= 33; //assigned let.
    document.write("<br>" + f); //wrote string to document stream.
}
document.write("<br>" + f); //wrote string to document stream.

function objectFunction() { //assigned 'object' function.
    let car = { //assigned let.
        make: "Dodge ", //assigned object property.
        model: "Viper ", //assigned object property.
        year: "2021 ", //assigned object property.
        color: "red ", //assigned object property.
        description: function () { //assigned method.
            return "The car is a " + this.year + this.color + this.make + this.model; //assigned retun statement.
        } //closed method.
    }; //closed let.
    document.getElementById("carObject").innerHTML= car.description(); //wrote string to document stream.
} //closed 'object' function.