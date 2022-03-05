//Declaração de variáveis
var toggleMenu = document.querySelectorAll(".toggle_menu") //Variável recebe classe do toggle
var menuMobile = document.querySelector('.menu_mob') //Variável recebe classe do menu
var buttonMenu = document.querySelector(".menu_btn ion-icon")

//Abrir e fechar o menu mobile
for (var n = 0; n < toggleMenu.length; n++) {
    toggleMenu[n].addEventListener('click', function () {
        var overlay = document.querySelector('.overlay_mob');
        overlay.classList.toggle('overlay_open');
        menuMobile.classList.toggle('menu_mob_close');
        menuMobile.classList.toggle('menu_mob_open');

        var icon = buttonMenu.getAttribute('name') //variavel icon receber o atributo name da classe menu_btn

        if (icon === 'menu'){
            buttonMenu.setAttribute('name', 'close');//Se está como menu altera para close
        }
        else{
            buttonMenu.setAttribute('name', 'menu'); //Se está como close altera para menu
        }
    });
}



























