
const offScreenMenu = document.querySelector('.off-screen-menu');
const hiddenlinks=document.querySelectorAll('.list');
const hamburger = document.querySelector('.hamburger');
const hammenu=document.querySelector('.ham-menu');

        hiddenlinks.forEach((list) => {
            list.addEventListener('click', () => {
                offScreenMenu.classList.toggle('active');
                hammenu.classList.toggle("active");
            });
        });

        hamburger.addEventListener('click', () => {
            offScreenMenu.classList.toggle('active');
        });

        hamburger.addEventListener("click", function (){
            hammenu.classList.toggle("active");
        });

        function checkWidthAndRemoveClass() {
            if (window.innerWidth > 768) {
                hamburger.classList.remove('active');
                offScreenMenu.classList.remove('active');
            }
        }
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


// let swiper = null;

// function handleResponsiveSwiper() {
//   const screenWidth = window.innerWidth;

//   if (screenWidth < 768) {
//     if (swiper) {
//       swiper.destroy(true, true);
//       swiper = null;
//     }
//     const swiperWrapper = document.querySelector('.swiper-wrapper');
//     const swiperslider=document.querySelector('.swiper-slide');
//     if (swiperWrapper) {
//       swiperWrapper.style.display = 'flex';
//       swiperWrapper.style.flexDirection = 'column';
//       swiperWrapper.style.alignItems = 'center';
//       swiperslider.style.width = '354.5';
//     }
//   } else {
//     if (!swiper) {
//       swiper = new Swiper(".courseSwiper", {
//         loop: false,
//         spaceBetween: 24,
//         breakpoints: {
//           768: {
//             slidesPerView: 2, 
//           },
//           1240: {
//             slidesPerView: 4,
//           },
//         },
//         navigation: {
//           nextEl: ".swiper-button-next",
//           prevEl: ".swiper-button-prev",
//         },
//       });
//     }
//     const swiperWrapper = document.querySelector('.swiper-wrapper');
//     if (swiperWrapper) {
//       swiperWrapper.style.display = ''; 
//       swiperWrapper.style.flexDirection = '';
//     }
//   }
// }

// window.addEventListener("resize", handleResponsiveSwiper);
// handleResponsiveSwiper();

 let swiperInstance;
function handleSwiper() {
    if (window.innerWidth <= 768) {
        if (swiperInstance) {
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    } else {
        if (!swiperInstance) {
            swiperInstance = new Swiper('.courseSwiper', {
                loop: false,
                spaceBetween: 24,
                slidesPerView: 4,
                freeMode: true,
                breakpoints: {
                    1200: {
                        slidesPerView: 4
                    },
                    992: {
                        slidesPerView: 3
                    },
                    768: {
                        slidesPerView: 2
                    },
                   
                }
            });
        }
    }
}
 
window.addEventListener('resize', handleSwiper);
window.addEventListener('DOMContentLoaded', handleSwiper);


const scrollButton = document.getElementById('button');
const header=document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        scrollButton.classList.add('show');
        header.classList.add('show');
    } else {
        scrollButton.classList.remove('show');
        header.classList.remove('show')
    }
});
scrollButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

