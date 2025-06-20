
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
      