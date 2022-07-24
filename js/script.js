var nome = prompt("Qual é o seu nome?")
window.confirm(nome +", Bem-vinde ao resumão!");

document.getElementById("enviar").addEventListener("click",validaFormulario)

function validaFormulario(){
  if(document.getElementById("form-nome").value!=""&&document.getElementById("form-email").value!=""&&document.getElementById("form-texto").value!=""){
    alert("Oba!Prontinho, sua mensagem foi enviada com sucesso!")
  }else{
    alert("Poxa! Acho que faltou preencher algum campo.")
  }
}

