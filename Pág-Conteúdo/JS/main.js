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

function aumentarFonte() {
  let elementos = document.querySelectorAll('.content *' ); 
  elementos.forEach(elemento => {
      let tamanhoAtual = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
      let novoTamanho = Math.min(parseFloat(tamanhoAtual) + 2, 24); // Limite máximo de 24px
      elemento.style.fontSize = novoTamanho + 'px';
  });
}

function diminuirFonte() {
  let elementos = document.querySelectorAll('.content *');
  elementos.forEach(elemento => {
      let tamanhoAtual = window.getComputedStyle(elemento, null).getPropertyValue('font-size');
      let novoTamanho = Math.max(parseFloat(tamanhoAtual) - 2, 12); // Limite mínimo de 12px
      elemento.style.fontSize = novoTamanho + 'px';
  });
}

function resetarFonte() {
  let elementos = document.querySelectorAll('.content *');
  elementos.forEach(elemento => {
      elemento.style.fontSize = '';
  });
}




