//Countdown Timer (Start)
function countdown() { //assigned function. [result: countdown timer.]
    var seconds= document.getElementById("seconds").value; //assigned variable.

    function tick() { //assigned function.
        seconds= seconds -1; //
        timer.innerHTML= seconds; //
        var time= setTimeout(tick, 1000); //assigned variable. [result: pauses program for 1000 milliseconds.]
        if (seconds == -1) { //assigned if statement.
            alert("Time's up!"); //alert message.
            clearTimeout(time); //
            timer.innerHTML= ""; //
        }
    }
    tick(); //
} 
//Countdown Timer (End)

//Slideshow (Start)
var slideIndex= 1;
showSlides(slideIndex);
//Next and Previous Controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}
//Thumbnail Image Controls
function currentSlide(n) {
    showSlides(slideIndex= n);
}

function showSlides(n) {
    var i;
    var slides= document.getElementsByClassName("mySlides");
    var dots= document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex= 1}
    if (n < 1) {slideIndex= slide.length}
    for (i= 0; i < slides.length; i++) {
        slides[i].style.display= "none";
    }
    for (i= 0; i < dots.length; i++) {
        dots[i].className= dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display= "block";
    dots[slideIndex-1].className += " active";
} 
//Slideshow (End)