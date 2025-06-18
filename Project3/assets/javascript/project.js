const menu = document.querySelector('.menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const hiddenlinks=document.querySelector('ul');

        menu.addEventListener('click', () => {
            offScreenMenu.classList.toggle('active');
        });

        function checkWidthAndRemoveClass() {
            if (window.innerWidth > 991) {
                offScreenMenu.classList.remove('active');
            }
        }
        hiddenlinks.addEventListener("click", function (){
            offScreenMenu.classList.toggle('active');
        });

        checkWidthAndRemoveClass();

        window.addEventListener('resize', checkWidthAndRemoveClass);
        


const darkmode=document.querySelector('.lightdark');
darkmode.addEventListener('click', () => {
    darkmode.classList.toggle('active');
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
    if (swiperWrapper) {
      swiperWrapper.style.display = 'flex';
      swiperWrapper.style.flexDirection = 'column';
      swiperWrapper.style.alignItems = 'center';
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

//   const screenWidth = window.innerWidth;

//   if (screenWidth < 768) {
//     if (swiper) {
//       swiper.destroy(true, true);
//       swiper = null;
//     }
//     document.querySelector('.swiper-wrapper').classList.remove('swiper-wrapper'); // Ensure flexbox works
//   } else {
//     if (!swiper) {
//       swiper = new Swiper('.swiper', {
//         spaceBetween: 24,
//         breakpoints: {
//           1024: {
//             slidesPerView: 4,
//           },
//           768 : {
//             slidesPerView: 2,
//             loop : true,
//             centeredSlides : true
//           }
//         },
//       });
//     } else {
//       swiper.params.slidesPerView = screenWidth >= 1024 ? 4 : 2; 
//       swiper.update(); 
//     }
//   }
// }

// handleResponsiveSwiper();

// window.addEventListener('resize', handleResponsiveSwiper);


