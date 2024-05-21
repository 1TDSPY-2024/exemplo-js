const registraUsuario = (
    inputNome,
     inputCpf,
      inputGen,
       inputEmail,
        inputSenha,
         inputConfirmaSenha
        ) => {  
          
    if(inputSenha.value == inputConfirmaSenha.value) {

        document.querySelector("label[for=idConfirmaSenha]").setAttribute("class", "sucesso");

        inputConfirmaSenha.addEventListener("focus", () => {
            document
            .querySelector("label[for=idConfirmaSenha]")
            .setAttribute("class", "")
        })
        

        const usuario = {
            txtNome: inputNome.value,
            txtCpf : inputCpf.value,
            gen : inputGen.value,
            txtEmail : inputEmail.value,
            txtSenha : inputSenha.value
        }

        let listaUsuarios = JSON.parse(localStorage.getItem("base-dados")) || [];

        listaUsuarios.push(usuario);

        localStorage.setItem("base-dados", JSON.stringify(listaUsuarios));

        window.location.href = "../index.html";

        return true;
    } else {
        // deixando o label vermelho pq as senhas nao estao iguais
        document.querySelector("label[for=idConfirmaSenha]").setAttribute("class", "erro");
        return false;
    }

    
};
let inputCpf = document.querySelector("#idCpf");
//atrellando ao campo cpf um evento de entrada de dados.
inputCpf.addEventListener("input", (e) =>{
    let cpf = "";
    cpf = e.target.value;

    cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf.replace(/(\d{3})(\d)/, "$1.$2");
    cpf.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
    e.target.value = cpf;
});
//funcao classica
    // inputCpf.addEventListener("input", function(){
    //     console.log(this);
    // })