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