const menu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const hiddenlinks=document.querySelectorAll('.list');

        menu.addEventListener('click', () => {
            offScreenMenu.classList.toggle('active');
        });

        function checkWidthAndRemoveClass() {
            if (window.innerWidth > 991) {
                offScreenMenu.classList.remove('active');
            }
        }
        hiddenlinks.forEach((list) => {
            list.addEventListener('click', () => {
                offScreenMenu.classList.toggle('active');
            });
        });

        checkWidthAndRemoveClass();

        window.addEventListener('resize', checkWidthAndRemoveClass);
        


const darkmode = document.querySelectorAll('.lightdark');
const body = document.querySelector('body');
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark');
}

darkmode.forEach(button => {
    button.addEventListener('click', (event) => {
        body.classList.toggle('dark');
        const isDark = body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
});


let swiper = null;

function handleResponsiveSwiper() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 768) {
    if (swiper) {
      swiper.destroy(true, true);
      swiper = null;
    }
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    const swiperslider=document.querySelector('.swiper-slide');
    if (swiperWrapper) {
      swiperWrapper.style.display = 'flex';
      swiperWrapper.style.flexDirection = 'column';
      swiperWrapper.style.alignItems = 'center';
      swiperslider.style.width = '354.5';
    }
  } else {
    if (!swiper) {
      swiper = new Swiper(".courseSwiper", {
        loop: false,
        spaceBetween: 24,
        breakpoints: {
          768: {
            slidesPerView: 2, 
          },
          1240: {
            slidesPerView: 4,
          },
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    }
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    if (swiperWrapper) {
      swiperWrapper.style.display = ''; 
      swiperWrapper.style.flexDirection = '';
    }
  }
}

window.addEventListener("resize", handleResponsiveSwiper);
handleResponsiveSwiper();


window.addEventListener('scroll', function(){
  if(window.scrollY >= 80){

  }
})

function scroll(){
  window.scroll({
    top : 0,
    left : 0,
    behavior : 'smooth'
  })
}