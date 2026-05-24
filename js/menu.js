// Menu responsivo

const botaoMenu =
document.getElementById("menu-btn");

const menu =
document.querySelector(".menu");

if(botaoMenu){

botaoMenu.addEventListener(
"click",

function(){

menu.classList.toggle("ativo");

});

}