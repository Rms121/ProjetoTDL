/*Navbar */

$(document).ready(function () {

    $('.sub-btn').click(function () {
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate');
    });

    $('.menu-btn').click(function () {
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function () {
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible");
    });

});

/* TopButon */

let mybutton = document.getElementById("myBtn");
            
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/* Button Font Size */

let buttons = document.querySelector('.buttons');
let btn = buttons.querySelectorAll('.btn');
for (var i = 0; i < btn.length; i++){
  btn[i].addEventListener('click', function(){
    let current = document.getElementsByClassName('activ3');
    current[0].classNamelassName = current[0].className.replace("activ3", "");
    this.className += " activ3";
  })
};


