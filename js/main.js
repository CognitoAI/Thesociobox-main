// humburger menu bar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

if(hamburger){
  hamburger.addEventListener("click", mobileMenu);
}

// navLink.forEach(n => n.addEventListener("click", closeMenu));
navLink.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", closeMenu);
    }
  )
function mobileMenu() {
    hamburger.classList.toggle("showMenu");
    navMenu.classList.toggle("showMenu");
}

// close toggle


function closeMenu() {
    hamburger.classList.remove("showMenu");
    navMenu.classList.remove("showMenu");
}




// topbanner carousel
$(document).ready(function(){
  
    $('.carousel-slider').slick({
      arrows: true,
      // dots: true,
      autoplay:true,
      variableWidth: true,
      slidesToShow: 3,
      infinite: true,
      // centerMode: true,
    //  centerPadding: '60px',

    responsive: [

      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
          infinite: true,
          
        }
      },

      {
        breakpoint: 600,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 2
        }
      },
      
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          // centerMode: true,
          // centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]

    });



    
  });
  

// client carousel
$(document).ready(function(){
  
  $('.client-carousel').slick({
    arrows: true,
    dots: true,
    autoplay:true,
    variableWidth: true,
    slidesToShow: 8,
    infinite: true,
    // centerMode: true,
  //  centerPadding: '60px',

  responsive: [

    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        // slidesToScroll: 3,
        infinite: true,
        
      }
    },

    {
      breakpoint: 600,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 2
      }
    },
    
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        // centerMode: true,
        // centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]

  });



  
});


// faqs
$(function () {
  $('.question-title').click(function (j) {

    var dropDown = $(this).closest('.question-card').find('.answer-title');
    $(this).closest('.question-list').find('.answer-title').not(dropDown).slideUp();

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
    } else {
      $(this).closest('.question-list').find('.question-title.active').removeClass('active');
      $(this).addClass('active');
    }

    dropDown.stop(false, true).slideToggle();
    j.preventDefault();
  });
});
