var slideItem = 0;
var bolinhas = document.getElementsByClassName("bolinha");

window.onload = function() {
    
    setInterval(passarSlide, 5000);

    var slidewidth = document.getElementById("slideshow").offsetWidth;
    
    var objs = document.getElementsByClassName("slide");
    
    for(var i=0; i<objs.length; i++) {        
        objs[i].style.width = slidewidth+"px";
    }

}

function passarSlide() {    
    var slidewidth = document.getElementById("slideshow").offsetWidth;       
    
    if(slideItem >= 3) {
        bolinhas[slideItem].classList.remove("bolinha-ativa");
        slideItem = 0;
    } else {
        bolinhas[slideItem].classList.remove("bolinha-ativa");
        slideItem++;
    }

    bolinhas[slideItem].classList.add("bolinha-ativa");
    document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function mudarSlide(pos) {
    slideItem = pos;

    var slidewidth = document.getElementById("slideshow").offsetWidth;

    document.getElementsByClassName("slideshow-area")[0].style.marginLeft = "-"+(slidewidth * slideItem)+"px";
}

function toggleMenu() {
    var menu = document.getElementById("menu");

    if (menu.style.display == 'none' || menu.style.display == '') {
        menu.style.display = "block";
    } else {
        menu.style.display = 'none';
    }
}


