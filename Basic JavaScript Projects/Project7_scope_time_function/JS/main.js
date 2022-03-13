if (1<2) { //assigned an 'if statement'
    document.write("The left number is smaller than the number on the right.") //assigned display message if conditions met.
}

    document.write("<br>"); //line break.
    document.write("<br>"); //line break.

//This is a Global Variable operation
var A= 1; //assigned value to variable.
function addNumbers1() { //created function to add variable and an integer.
    document.write(3 + A + "<br>"); //adds variable and an integer.
}
function addNumbers2() { //created function to add variable and an integer.
    document.write(A + 80); //adds variable and an integer.
}
addNumbers1(); //display result.
addNumbers2(); //display result.

    document.write("<br>"); //line break.
    document.write("<br>"); //line break.

//This is a Local Variable operation    
function addNumbers3() { //created function to add variable and an integer.
    var B= 3; //assigned value to variable.
    document.write(7+B+"<br>"); //adds variable and an integer.
}
function addNumbers4() { //created function to add variable and an integer.
    document.write(B+86); //adds variable and an integer (however it will not in this 'local variable' instance.)
} //NOTE: The line above is not intended to display an outcome. End Note.
addNumbers3(); //display result.
addNumbers4(); //display result.

    document.write("<br>"); //line break.
    document.write("<br>"); //line break.

//This is a function intentionally created with errors and to be debugged using Console.Log()
function adNumbers5() { //created function to add variable and an integer. [I typo'd 'add']
    var C= 10; //assigned value to variable.
    console.log(15+C); //adds variable and an integer.
}
function addNumbers6() { //created function to add variable and an integer.
    console.log(C+100); //adds variable and an integer.
}
addNumbers5(); //display result.
addNumbers6(); //display result.

function getDate() { //created a function.
    if (new Date().getHours()<16) { //assigned an 'if statement'
    document.getElementById("greeting").innerHTML= "How are you today?"; //assigned display message if conditions met.
    }
}

function getDate2() { //created a function.
    if (new Date().getHours()<5) { //assigned an 'if statement'
    document.getElementById("greeting2").innerHTML= "Happy Dayz is not open yet."; //assigned display message if conditions met.
    }
}

function ageFunction() { //created a function.
    age= document.getElementById("age").value; //user inputs data.
    if (age>=18) { //assigned an 'if statement'.
        vote= "You are old enough to vote!"; //assigned display message if conditions met.
    }
    else { //assigned an 'else statement'.
        vote= "You cannot, you are not old enough to vote!"; //assigned display message if conditions not met.
    }
    document.getElementById("How_old_are_you?").innerHTML= vote; //retrieves input data and determins if or else.
}

function timeFunction() { //created a function.
    var time= new Date().getHours(); //assign variable value.
    var reply;
    if (time < 12 == time > 0) { //assigned an 'if statement'.
        reply= "It is morning!"; //assigned display message if conditions met.
    }
    else if (time >= 12 == time < 18) { //assigned an 'else if statement'.
        reply= "It is afternoon!"; //assigned display message if conditions met.
    }
    else { //assigned an 'else statement'.
        reply= "It is evening time."; //assigned display message if conditions met.
    }
    document.getElementById("timeOfDay").innerHTML= reply; //replies user with the information a statement, dependent on condition.
}