const hamburger = document.querySelector('.hamburger');
const offScreenMenu = document.querySelector('.off-screen-menu');
const hammenu=document.querySelector('.ham-menu');
const hiddenlinks=document.querySelector('ul');
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
        hiddenlinks.addEventListener("click", function (){
            hammenu.classList.toggle("active");
            offScreenMenu.classList.toggle('active');
        });

        checkWidthAndRemoveClass();

        window.addEventListener('resize', checkWidthAndRemoveClass);
