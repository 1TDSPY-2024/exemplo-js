const registrarUser = (inputName, inputEmail, inputSenha)=>{
        const usuario = {
            userName : inputName.value,
            userEmail : inputEmail.value,
            userSenha : inputSenha.value
        }

        let listaUsuarios = JSON.parse(localStorage.getItem("base-dados")) || [];

        listaUsuarios.push(usuario);

        localStorage.setItem("base-dados", JSON.stringify(listaUsuarios));

};