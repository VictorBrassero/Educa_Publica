//Função para verificação de preenchimento de campos do formulário
function verificar(){
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var cpf = document.getElementById('senha').value;

    if (!nome || !email || !senha){
        alert("Campos não preenchidos, favor preencê-los");
    } else{
        alert("Campos preenchidos com sucesso");
    }	
}