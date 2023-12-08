document.addEventListener("DOMContentLoaded", function () {
    exibirClientes();
});

function exibirClientes() {
    var clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    var listaContainer = document.getElementById("lista-container");

    if (clientes.length > 0) {
        var listaHtml = "<ul>";
        clientes.forEach(function (cliente, index) {
            listaHtml += "<li>Nome: " + cliente.nome + " | E-mail: " + cliente.email + " | CPF: " + cliente.cpf +
                "| <button onclick='alterarCliente(" + index + ")'>Alterar</button> | " +
                "<button onclick='excluirCliente(" + index + ")'>Excluir</button></li>";
        });
        listaHtml += "</ul>";

        listaContainer.innerHTML = listaHtml;
    } else {
        listaContainer.innerHTML = '<p>Nenhum cliente cadastrado.</p>';
    }
}


function alterarCliente(index) {
    var clientes = JSON.parse(localStorage.getItem('clientes')) || [];
    var clienteSelecionado = clientes[index];

    document.getElementById('nome').value = clienteSelecionado.nome;
    document.getElementById('sobrenome').value = clienteSelecionado.sobrenome;
    document.getElementById('email').value = clienteSelecionado.email;
    document.getElementById('cpf').value = clienteSelecionado.cpf;
    document.getElementById('dataNascimento').value = clienteSelecionado.dataNascimento;
    document.getElementById('cep').value = clienteSelecionado.cep;
    document.getElementById('endereco').value = clienteSelecionado.endereco;
    document.getElementById('uf').value = clienteSelecionado.uf;
    document.getElementById('numero').value = clienteSelecionado.numero;

    var botaoCadastrar = document.getElementById('btnCadastrar');
    botaoCadastrar.innerText = 'Atualizar Cliente';

    document.getElementById('clienteIndex').value = index;
}


function excluirCliente(index) {
    var confirmacao = confirm('Tem certeza que deseja excluir este cliente?');
    if (confirmacao) {
        var clientes = JSON.parse(localStorage.getItem('clientes')) || [];
        clientes.splice(index, 1); // Remove o cliente do array
        localStorage.setItem('clientes', JSON.stringify(clientes)); // Atualiza o LocalStorage
        exibirClientes(); // Atualiza a lista após a exclusão
    }
}
