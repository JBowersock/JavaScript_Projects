function rideFunction() { //Assigned a function.
    var height, canRide; //Assigned variables.
    height= document.getElementById("height").value; //Assigned input requesting user height.
    canRide= (height < 52) ? "You are too short":"You are tall enough"; //ternary operator, Assigned response based upon user input.
    document.getElementById("ride").innerHTML= canRide + " to ride."; //Assigned a result request upon clicking button.
}

function vehicle(make, model, year, color) { //Assigned a function.
    this.vehicleMake= make; //Assigned object that possesses the function.
    this.vehicleModel= model; //Assigned object that possesses the function.
    this.vehicleYear= year; //Assigned object that possesses the function.
    this.vehicleColor= color; //Assigned object that possesses the function.
}
var jack= new vehicle("dodge", "viper", 2020, "red"); //Assigned object constructor inputs.
var emily= new vehicle("jeep", "trail hawk", 2019, "white and black"); //Assigned object constructor inputs.
var erik= new vehicle("chevy", "camaro", 1967, "black"); //Assigned object constructor inputs.
function myFunction() { //Assigned a result request upon clicking button.
    document.getElementById("keywordsAndConstructors").innerHTML= "Erik drives a " + erik.vehicleColor + "-colored " + erik.vehicleModel + " manufactured in " + erik.vehicleYear;
}

function animal(size, speed, strength) { //Assigned a function.
    this.animalSize= size; //Assigned object that possesses the function.
    this.animalSpeed= speed; //Assigned object that possesses the function.
    this.animalStrength= strength; //Assigned object that possesses the function.
}
var rabbit= new animal("small", "slow", "weak"); //Assigned object constructor inputs.
var cheetah= new animal("medium", "fast", "average"); //Assigned object constructor inputs.
var bear= new animal("large", "average", "strong"); //Assigned object constructor inputs.
function animalKingdom() { //Assigned a result request upon clicking button.
    document.getElementById("newAndThis").innerHTML= "The bear is a " + bear.animalSize + ", " + bear.animalSpeed + " speed animal that is also very " + bear.animalStrength
}

function person(first, last, age) { //Assigned a name to a object constructor function.
    this.firstName= first; //Assigned object that possesses the function.
    this.lastName= last; //Assigned object that possesses the function.
    this.age= age; //Assigned object that possesses the function.
}
var employee1= new person("Josh", "Bowersock", "33"); //Assigned object constructor inputs.
var employee2= new person("Deanna", "Bowersock", "56"); //Assigned object constructor inputs.
function family() { //Assigned a result request upon clicking button.
    document.getElementById("sonAndMom").innerHTML= "Employee number 1's name is " + employee1.firstName + " " + employee1.lastName + " and is " + employee1.age + " years old."
}

function countFunction() { //Assigned a function.
    document.getElementById("counting").innerHTML= count(); //Assigned to paragraph class.
    function count() { //Assigned a nested function.
        var startingPoint= 9; //Assigned an integer starting point of 9.
        function plusOne() {startingPoint += 1;} //Assigned a function that adds 1.
        plusOne(); //Implement nested function.
        return startingPoint; //Recieve new startingPoint integer.
    }
}

function myNestedFunction() { //Assigned a function.
    document.getElementById("nestedFunction").innerHTML= count(); //Assigned to paragraph class.
    function count() { //Assigned a nested function.
        var startingPoint= 20; //Assigned an integer starting point of 20.
        function plusOne() {startingPoint += 2;} //Assigned a function that adds 2.
        plusOne(); //Implement nested function.
        return startingPoint; //Recieve new startingPoint integer.
    }
}