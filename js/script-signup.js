const registraUsuario = (inputNome, inputCpf, inputGen, inputEmail, inputSenha, inputConfirmaSenha) => {
    
    if(inputSenha.value == inputConfirmaSenha.value) {
        const usuario = {
            nome: inputNome,
            cpf : inputCpf,
            gen : inputGen,
            email : inputEmail,
            senha : inputSenha
        }

        let listaUsuarios = JSON.parse(localStorage.getItem("base-dados")) || [];

        listaUsuarios.push(usuario);

        localStorage.setItem("base-dados", JSON.stringify(listaUsuarios));

    } else {
        // deixando o label vermelho pq as senhas nao estao iguais
        document.querySelector("label[for=idConfirmaSenha]").setAttribute("class", "erro");
        return false;
    }
}