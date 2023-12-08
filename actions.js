document.addEventListener("DOMContentLoaded", function() {
    var enviarBtn = document.getElementById("enviarBtn");
    var senhaInput = document.getElementById("senhaInput");
    var nomeInput = document.getElementById("nomeInput");

    /*Função adicionado ao BUTTON */
    enviarBtn.addEventListener("click", function() {
        validarForm();
    });

    nomeInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            senhaInput.focus();
        }
    });

    senhaInput.addEventListener("keydown", function(event) {
        if (event.keyCode === 13) {
            validarForm();
        }
    });

    function showWarning(message) {
        alert(message);
    }

    function validarForm() {
        var nome = nomeInput.value;
        var senha = senhaInput.value;

        var regNome = new RegExp("[A-z ]{6,100}");
        var regSenha = new RegExp("^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,25}");

        if (!regNome.test(nome)) {
            showWarning("Informe um nome completo (mínimo 6 caracteres)!");
        } else if (!regSenha.test(senha)) {
            showWarning("Informe uma senha forte!");
        } else {
            /*Se ambos os campos forem válidados, uma msg será exibida*/ 
            showWarning("Olá " + nome+"!");
            console.log("Nome:", nome);
            console.log("Senha:", senha);
            /*Após "clickar" em OK na, o usuário é redirecionado p/ Página Inicial*/
            window.location.href = "HTMLSeparado.html";
        }
    }
});