//@TODO: Rotation of triangles

const trg1 = document.getElementById("trg1");
window.addEventListener("scroll", function() {
    trg1.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg2 = document.getElementById("trg2");
window.addEventListener("scroll", function() {
    trg2.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg3 = document.getElementById("trg3");
window.addEventListener("scroll", function() {
    trg3.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg4 = document.getElementById("trg4");
window.addEventListener("scroll", function() {
    trg4.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg5 = document.getElementById("trg5");
window.addEventListener("scroll", function() {
    trg5.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg6 = document.getElementById("trg6");
window.addEventListener("scroll", function() {
    trg6.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg7 = document.getElementById("trg7");
window.addEventListener("scroll", function() {
    trg7.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg8 = document.getElementById("trg8");
window.addEventListener("scroll", function() {
    trg8.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg9 = document.getElementById("trg9");
window.addEventListener("scroll", function() {
    trg9.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg10 = document.getElementById("trg10");
window.addEventListener("scroll", function() {
    trg10.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg11 = document.getElementById("trg11");
window.addEventListener("scroll", function() {
    trg11.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg12 = document.getElementById("trg12");
window.addEventListener("scroll", function() {
    trg12.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg13 = document.getElementById("trg13");
window.addEventListener("scroll", function() {
    trg13.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg14 = document.getElementById("trg14");
window.addEventListener("scroll", function() {
    trg14.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg15 = document.getElementById("trg15");
window.addEventListener("scroll", function() {
    trg15.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg16 = document.getElementById("trg16");
window.addEventListener("scroll", function() {
    trg16.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg17 = document.getElementById("trg17");
window.addEventListener("scroll", function() {
    trg17.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg18 = document.getElementById("trg18");
window.addEventListener("scroll", function() {
    trg18.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg19 = document.getElementById("trg19");
window.addEventListener("scroll", function() {
    trg19.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg20 = document.getElementById("trg20");
window.addEventListener("scroll", function() {
    trg20.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});
const trg21 = document.getElementById("trg21");
window.addEventListener("scroll", function() {
    trg21.style.transform = "rotate("+window.pageYOffset/3+"deg)";
});

//@TODO: Scroll

$("body").on('click', '[href*="#"]', function(e){
    var fixed_offset = 50;
    $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1300);
    e.preventDefault();
});

//@TODO: Scroll button

$(document).ready(function(){

    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });

});
