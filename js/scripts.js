$( document ).ready(function() {

  $(document).ready(function() {

    let stop = 0;
  
    $(window).scroll(function(e) {
      let scroll = $(window).scrollTop();
  
      // Use a posição de outra seção como referência para ativar o scroll
      let aboutSectionOffset = $('#home-area').offset().top;
  
      if (scroll > (aboutSectionOffset - 500) && stop == 0) {
        // Realize as ações necessárias quando a seção 'about-area' fica visível
        // por exemplo, iniciar animações
        stop = 1;
      }
    });
  
  });
  
  document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.getElementById('navbar');
    var previousScrollPosition = window.pageYOffset;

    window.addEventListener('scroll', function() {
      var currentScrollPosition = window.pageYOffset;
      if (previousScrollPosition < currentScrollPosition) {
        // Rolando para baixo
        navbar.classList.add('navbar-hidden');
      } else {
        // Rolando para cima
        navbar.classList.remove('navbar-hidden');
      }
      previousScrollPosition = currentScrollPosition;
    });
  });

  // Parallax

  // setTimeout serve para carregar primeiro as imagens
  setTimeout(function() {
    $('#data-area').parallax({imageSrc: 'img/cidadeparallax.png'});
    $('#apply-area').parallax({imageSrc: 'img/pattern.png'});
  }, 200);

  // Filtro portfólio

  $('.filter-btn').on('click', function() {

    let type = $(this).attr('id');
    let boxes = $('.project-box');

    $('.main-btn').removeClass('active');
    $(this).addClass('active');

    if(type == 'dsg-btn') {
      eachBoxes('dsg', boxes);
    } else if(type == 'dev-btn') {
      eachBoxes('dev', boxes);
    } else if(type == 'seo-btn') {
      eachBoxes('seo', boxes);
    } else {
      eachBoxes('all', boxes);
    }

  });

  function eachBoxes(type, boxes) {

    if(type == 'all') {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function() {
        if(!$(this).hasClass(type)) {
          $(this).fadeOut('slow');
        } else {
          $(this).fadeIn();
        }
      });
    }
  }

  // scroll para as seções

  let navBtn = $('.nav-item');

  let bannerSection = $('#home-area');
  let homeSection = $('#home-area');
  let maqSection = $('#seg-area');
  let certSection = $('#cert-area');
  let teamSection = $('#team-area');
  let solucoesSection = $('#solucoes-area');
  let contactSection = $('#contact-area');

  let scrollTo = '';

  $(navBtn).click(function() {

    let btnId = $(this).attr('id');

    if(btnId == 'home-menu') {
      scrollTo = homeSection;
    } else if(btnId == 'maq-menu') {
      scrollTo = maqSection;
    } else if(btnId == 'cert-menu') {
      scrollTo = certSection;
    } else if(btnId == 'team-menu') {
      scrollTo = teamSection;
    } else if(btnId == 'solucoes-menu') {
      scrollTo = solucoesSection;
    } else if(btnId == 'contact-menu') {
      scrollTo = contactSection;
    } else {
      scrollTo = bannerSection;
    }

    $([document.documentElement, document.body]).animate({
        scrollTop: $(scrollTo).offset().top - 70
    }, 1500);
  });

});

$('#seg-area').on('click', '.carousel-control-prev', function() {
  console.log('Botão Prev clicado');
});

$('#seg-area').on('click', '.carousel-control-next', function() {
  console.log('Botão Next clicado');
});

