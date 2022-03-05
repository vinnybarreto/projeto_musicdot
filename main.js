//Declaração de variáveis
var toggleMenu = document.querySelectorAll(".toggle_menu")
var buttonMenu = document.querySelector(".menu_btn")



//Abrir e fechar o menu mobile
for(var n=0; n < toggleMenu.length; n++){
    toggleMenu[n].addEventListener('click', function(){
        var overlay = document.querySelector('.overlay_mob');
        overlay.classList.toggle('.overlay_open');

    })
}


