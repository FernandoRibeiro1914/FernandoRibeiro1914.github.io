function validarCad() {
   
    var nome = document.getElementById("nome").value;
    var sobrenome = document.getElementById("sobrenome").value;
    var dataNascimento = document.getElementById("dataNascimento").value;
    var cep = document.getElementById("cep").value;
    var endereco = document.getElementById("endereco").value;
    var uf = document.getElementById("uf").value;
    var numero = document.getElementById("numero").value;

    var regNome = new RegExp("[A-Za-z ]{6,100}");
    var regSobrenome = new RegExp("[A-Za-z ]{6,100}");
    var regDataNascimento = new RegExp(/^\d{4}-\d{2}-\d{2}$/);

    var mensagemErro = '';

    if (!regNome.test(nome)) {
        mensagemErro += "Informe um nome válido (mínimo 6 caracteres)!\n";
    }

    if (!regSobrenome.test(sobrenome)) {
        mensagemErro += "Por favor, informe um sobrenome válido (mínimo 6 caracteres)!\n";
    }

    if (!regDataNascimento.test(dataNascimento)) {
        mensagemErro += "Por favor, informe uma data de nascimento válida!\n";
    }

    if (!regCep.test(cep)) {
        mensagemErro += "Informe um CEP válido! (formato: nnnnn-nnn)!\n";
    }

    if (mensagemErro !== '') {
        alert(mensagemErro);
    } else {
        cadastrarCliente(nome, sobrenome,  dataNascimento, cep, endereco, uf, numero);
       
    }
}

function cadastrarCliente(nome, sobrenome, cpf, dataNascimento, cep, endereco, uf, numero) {

    var cliente = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        cpf: cpf,
        dataNascimento: dataNascimento,
        cep: cep,
        endereco: endereco,
        uf: uf,
        numero: numero
    };

    var clientesExistentes = JSON.parse(localStorage.getItem('clientes')) || [];

    clientesExistentes.push(cliente);

    localStorage.setItem('clientes', JSON.stringify(clientesExistentes));

    exibirMensagemSucesso('Cliente cadastrado com sucesso.');

    limparCamposFormulario();
}

function exibirMensagemErro(mensagem) {
    var mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = '<p style="color: red;">' + mensagem + '</p>';
}

function exibirMensagemSucesso(mensagem) {
    var mensagemDiv = document.getElementById('mensagem');
    mensagemDiv.innerHTML = '<p style="color: green;">' + mensagem + '</p>';
}

function limparCamposFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('sobrenome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('cpf').value = '';
    document.getElementById('dataNascimento').value = '';
    document.getElementById('cep').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('uf').value = '';
    document.getElementById('numero').value = '';
}
    