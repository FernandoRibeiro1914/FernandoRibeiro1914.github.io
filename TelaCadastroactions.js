/*FUNCTION p/ validar campos*/
function validar() {
    var nome = document.getElementById("nome").value;
    var senha = document.getElementById("senhaInput").value;
    var senhaConfirm = document.getElementById("senhaConfirm").value;
    var email = document.getElementById("email").value;
    var cpf = document.getElementById("cpf").value;
    
    /*Validar campos conforme RegExp */
    var regNome = new RegExp("[A-Za-z ]{6,100}");
    var regSenha = new RegExp("^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9])(?=.*[a-z]).{6,25}");
    var regEmail = new RegExp("^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}");
    var regCpf = new RegExp("[0-9]{11}");
    
    if (!regNome.test(nome)) {
        alert("Informe um nome válido (mínimo 6 caracteres)!");
    } else if (!regSenha.test(senha)) {
        alert("Informe uma senha forte!");
    } else if (senha !== senhaConfirm) {
        alert("As senhas não coincidem!");
    } else if (!regEmail.test(email)) {
        alert("Informe um email válido!");
    } else if (!regCpf.test(cpf)) {
        alert("Informe um CPF válido (11 dígitos numéricos)!");
    } else {
        /*Verifica se o EMAIL informado já está cadastrado*/
        if (localStorage.getItem('email') === email) {
            alert('O E-mail informado já está cadastrado!');
        } else {
            /*Verifica se o CPF informado já está cadastrado*/
            if (localStorage.getItem('cpf') === cpf) {
                alert('O CPF informado já está cadastrado! ');
            } else {
            /*Caso passe todas as validações, o cadastro é realizado*/
            localStorage.setItem('name', nome);
            localStorage.setItem('email', email);
            localStorage.setItem('password', senha);
            localStorage.setItem('cpf', cpf);

            // Exibe mensagem de sucesso
            alert("Cadastro realizado com sucesso!");

            /*Após o cadastro ser realizado, os valores nos campos são limpos*/ 
            document.getElementById("nome").value = '';
            document.getElementById("senhaInput").value = '';
            document.getElementById("senhaConfirm").value = '';
            document.getElementById("email").value = '';
            document.getElementById("cpf").value = '';

            // Redireciona para a página que mostra os dados
            window.location.href = "PaginaDados.html";
        }
    }
    }
}