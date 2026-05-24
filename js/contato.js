// Formulário

const formulario =
document.getElementById(
"formulario"
);

if(formulario){

formulario.addEventListener(
"submit",

function(event){

event.preventDefault();


let nome =
document.getElementById("nome");

let email =
document.getElementById("email");

let mensagem =
document.getElementById("mensagem");


if(

nome.value==="" ||
email.value==="" ||
mensagem.value===""

){

alert(
"Preencha todos os campos"
);

return;

}


if(
!email.value.includes("@")
){

alert(
"E-mail inválido"
);

return;

}


alert(
"Mensagem enviada com sucesso!"
);

formulario.reset();

});

}