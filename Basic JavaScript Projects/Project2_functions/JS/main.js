//Below is Step 66
function Two_Variables() {
    var A="Apples"; //Assigned first variable.
    var B="Oranges"; // Assigned second variable.
    document.getElementById("Two_Variables").innerHTML=A;
}

function My_First_Function() { //Defined a function.
    var str="This is the button text!"; //Defined variable, gave it a string value.
    document.getElementById("Button_Text").innerHTML=str; // Put value of the variable into the HTML element
}

//Below is Step 68
function myFunction() { //Defined a function.
    var sentence="I am learning";
    sentence+=" a lot from this book!";
    document.getElementById("Concatenate").innerHTML=sentence; //Put value of variable into HTML element
}