// FAQ accordion

const perguntas =
document.querySelectorAll(".accordion");


perguntas.forEach(function(item){

item.addEventListener(

"click",

function(){

let resposta =
this.nextElementSibling;


if(
resposta.style.display==="block"
){

resposta.style.display="none";

}
else{

document
.querySelectorAll(".resposta")
.forEach(function(div){

div.style.display="none";

});

resposta.style.display="block";

}

});

});