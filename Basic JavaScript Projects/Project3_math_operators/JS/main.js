var A= 5; //This incremenets the number 5 to 6.
A++;
document.write(A);

    document.write("<br>"); //line break
    document.write("<br>"); //line break
    document.write("<br>"); //line break
    document.write("<br>"); //line break

var B= 5.25; //This decrements the number 5.25 to 4.25.
B--;
document.write(B);

    document.write("<br>"); //line break
    document.write("<br>"); //line break
    document.write("<br>"); //line break

function addition_Function() { //Addition.
    var addition= 2+3;
    document.getElementById("math1").innerHTML= "2+3= " + addition;
}

function subtraction_Function() { //Subtraction.
    var subtraction= 5-2;
    document.getElementById("math2").innerHTML= "5-2= " + subtraction;
}

function multiplication_Function() { //Multiplication.
    var multiplication= 6*8;
    document.getElementById("math3").innerHTML= "6x8= " + multiplication;
}

function division_Function() { //Division.
    var division= 48/6;
    document.getElementById("math4").innerHTML= "48/6= " + division;
}

function arithmetic_Function() { //Add, Subtract, Multiple and Divide together.
    var arithmetic= (1+2)*10/2-5;
    document.getElementById("math5").innerHTML= "1 plus 2, multipled by 10, divided in half and then subtracted by 5 equals " +arithmetic;
}

function modulus_Operator() { //Remainders.
    var remainder= 25%6;
    document.getElementById("math6").innerHTML= "When you divide 25 by 6 you have a remainder of " +remainder;
}

function negation_Operator() { //Opposites.
    var x= 10;
    document.getElementById("math7").innerHTML= -x;
}

window.alert(Math.random() ); //This returns a random number between 0 and 1.

window.alert(Math.random() * 100); //This returns a random number between 0 and 100.