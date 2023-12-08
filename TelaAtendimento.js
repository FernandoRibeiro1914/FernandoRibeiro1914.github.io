// Função para salvar os dados no LocalStorage
function salvarDados(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Obtem os valores dos campos
    var nome = document.getElementById("nome").value;
    var contato = document.getElementById("contato").value;
    var assunto = document.getElementById("assunto").value;
    var mensagem = document.getElementById("mensagem").value;

    // Cria um objeto com os dados
    var dados = {
        nome: nome,
        contato: contato,
        assunto: assunto,
        mensagem: mensagem
    };

    // Converte o objeto em JSON e salva no LocalStorage
    localStorage.setItem("dadosFormulario", JSON.stringify(dados));

    // Pode exibir uma mensagem de sucesso ou redirecionar para outra página
    alert("Envio realizado, retornaremos em breve!");
}
