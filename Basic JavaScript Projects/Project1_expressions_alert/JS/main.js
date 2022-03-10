window.alert("This is a window alert!") //Wrote an alert method.

document.write("This is a document write.") //Wrote a document method.
   
    document.write("<br>"); //line break
    document.write("<br>"); //line break

var A="This is a string."; //Assigned a variable to a string value.
document.write(A) //Wrote a document method.
    
    document.write("<br>"); //line break
    document.write("<br>"); //line break

var B="This is another string assigned to a variable." //Assigned another variable to a string value.
window.alert(B) //Wrote an alert method.

document.write("John said \"It sure is nice out today!\" to Sally.") //Wrote a string which contains an apostrophe and/or quotation mark.
    
    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write("\"Be who you are and say what you feel,"
+" because those who mind don\'t matter and those who matter don\'t mind.\""
+" -Dr. Seuss".fontcolor("red")); //Assigning a concatenated string to a variable.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

var C="Nate" + " won!" //Assigned a concatenated string value to a variable.
document.write(C) //Wrote a document method.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

var Family="The Arezzinis", Dad="Jeremiah", Mom="Hermoine", Daughter="Penny", Son="Zorro"; //Assigning multiple variables to one statement.
document.write(Dad); //Wrote a document method.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(2+2); //Writing an expression.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

function My_First_Function() { //Defining a function and naming it.
    var str="This is the button text!"; //Defining a variable and giving it a string value.
    document.getElementById("Button_Text").innerHTM=str; // Putting the value of the variable into the HTML elementFromPoint with the "Button_Text" id.
}