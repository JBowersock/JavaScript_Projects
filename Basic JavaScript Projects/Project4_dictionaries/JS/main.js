function my_Dictionary() { //Dictionary.
    var music= { //Assigned a variable.
        country:"Tim McGraw", //Assigned a key and value.
        rock:"AC/DC", //Assigned a key and value.
        metal:"Metallica", //Assigned a key and value.
        rap:"Ice Cube", //Assigned a key and value.
        pop:"Christina Aguilera", //Assigned a key and value.
    };
    delete music.rock; //Assigned delete, removing 'rock' from dictionary. making output 'undefined'.
    document.getElementById("dictionary").innerHTML= music.rock; //Assigned output to 'rock' value.
}