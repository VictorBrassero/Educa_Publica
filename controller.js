//Função para verificação de preenchimento de campos do formulário

function verificar(){
    var email = document.getElementById('email').value;
    var passaword = document.getElementById('password').value;
    // var esc = document.getElementById('Escolha').value;
    

     if(!email || !passaword){  //!Escolha){
        alert("Campos não preenchidos, favor preencê-los");
    }else{
        window.location.href="Menu.html";    }	
}