document.addEventListener("DOMContentLoaded", function () {
    exibirDadosUsuario();
});

function exibirDadosUsuario() {
    var nome = localStorage.getItem('name');
    var email = localStorage.getItem('email');
    var senha = localStorage.getItem('password');
    var cpf = localStorage.getItem('cpf');

    var dadosContainer = document.getElementById("dados-container");

    var dadosHtml = `
        <p>Nome: ${nome} <button class="alterar" data-campo="name">Alterar</button> <button class="excluir" data-campo="name">Excluir</button></p>
        <p>Email: ${email} <button class="alterar" data-campo="email">Alterar</button> <button class="excluir" data-campo="email">Excluir</button></p>
        <p>Senha: ${senha} <button class="alterar" data-campo="password">Alterar</button> <button class="excluir" data-campo="password">Excluir</button></p>
        <p>CPF: ${cpf} <button class="alterar" data-campo="cpf">Alterar</button> <button class="excluir" data-campo="cpf">Excluir</button></p>
    `;

    dadosContainer.innerHTML = dadosHtml;

    // Adiciona eventos aos botões
    var alterarButtons = document.querySelectorAll('.alterar');
    var excluirButtons = document.querySelectorAll('.excluir');

    alterarButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var campo = button.dataset.campo;
            alterarCampo(campo);
        });
    });

    excluirButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            var campo = button.dataset.campo;
            excluirCampo(campo);
        });
    });
}

function alterarCampo(campo) {
    var novoValor = prompt(`Informe o novo valor:`);
    if (novoValor !== null) {
        // Atualiza o valor no localStorage
        localStorage.setItem(campo, novoValor);
        // Atualiza a exibição na página
        exibirDadosUsuario();
    }
}

function excluirCampo(campo) {
    var confirmacao = confirm(`Tem certeza que deseja excluir este campo?`);
    if (confirmacao) {
        // Remove o valor do localStorage
        localStorage.removeItem(campo);
        // Atualiza a exibição na página
        exibirDadosUsuario();
    }
}
