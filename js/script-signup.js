const registraUsuario = (inputNome, inputCpf, inputGen, 
  inputEmail, inputSenha, inputConfirmaSenha) => {
  if (inputSenha.value == inputConfirmaSenha.value) {

    document.querySelector("label[for=idConfirmaSenha]").setAttribute("class", "sucesso")

    inputConfirmaSenha.addEventListener("focus", () => {
      document.querySelector("label[for=idConfirmaSenha]").setAttribute("class", "")
    })

    const usuario = {
      nome: inputNome.value,
      cpf: inputCpf.value,
      genero: inputGen.value,
      email: inputEmail.value,
      senha: inputSenha.value,
    }

    //recupera o banco do localStorage e adiciona o objeto na lista usuarios

    let listaUsuarios = JSON.parse(localStorage.getItem("banco-dados") || [])

    // adicionando o objeto na lista

    listaUsuarios.push(usuario);

    localStorage.setItem("banco-dados", JSON.stringify(listaUsuarios))

    return false
  }
  else {
    document.querySelector("label[for=idConfirmaSenha]").setAttribute("class", "erro")

    inputConfirmaSenha.addEventListener("focus", () => {
      document.querySelector("label[for=idConfirmaSenha]").setAttribute("class", "")
    })

    return false
  }
}