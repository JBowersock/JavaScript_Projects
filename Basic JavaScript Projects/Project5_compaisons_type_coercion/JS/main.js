document.write(typeof "word"); //Type: String.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(typeof 3); //Type: Number.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write("10"+5); //Type Coercion, results in '105'. Not 15.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(2E310); //Display result: Infinity. Because higher than 1.7976931348623157E308.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(-2E310); //Display result: -Infinity. Because higher than -1.7976931348623157E308.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(10>2); //Boolean: true.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(10<2); //Boolean: false.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(10==10); //double equal: true.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(3==11); //double equal: false.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

x=10;
y=10;
document.write(x===y); //triple equal: true.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

a=82; //Assigned a
b="82"; //Assigned b
document.write(a===b); //triple equal: false.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

c="sky"; //Assigned c
d="sky"; //Assigned d
document.write(c===d); //triple equal: true. (using string text).
    
    document.write("<br>"); //line break
    document.write("<br>"); //line break

e="moon"; //Assigned e
f="sun"; //Assigned f
document.write(e===f); //triple equal: false. (using string text).

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(5>2&&10>4); //Boolean AND (ex: &&) operation: true.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(5>10&&10>4); //Boolean AND (ex: &&) operation: false.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(5>10||10>4); //Boolean OR (ex: ||) operation: true.

    document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(5>10||10>20); //Boolean OR (ex: ||) operation: false.

document.write("<br>"); //line break
    document.write("<br>"); //line break

document.write(5>10||10>20); //Boolean OR (ex: ||) operation: false.

console.log(2+3); //Console operation. True. To find, go to 'Run and Debug', click to initiate, debug menu below.

console.log(2<1); //Console operation: False.

function my_Function1() { //Assigned a function.
    document.getElementById("test1").innerHTML= 0/0; //Result 'NaN'. Cant divide 0 by 0.
}

function my_Function2() { //Assigned a function.
    document.getElementById("test2").innerHTML= isNaN('This is a string'); //True statement.
}

function my_Function3() { //Assigned a function.
    document.getElementById("test3").innerHTML= isNaN('007'); //False statement.
}

function not_Function1() { //Assigned a function.
    document.getElementById("not1").innerHTML= !(20>10); //Boolean NOT (ex:!) operation: false.
}

function not_Function2() { //Assigned a function.
    document.getElementById("not2").innerHTML= !(5>10); //Boolean NOT (ex:!) operation: true.
}