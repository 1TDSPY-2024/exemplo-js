//Recuperando o objeto do usuario logado.
const usuario = JSON.parse(localStorage.getItem("usuario-logado"));
 
const elViewUser = document.querySelector("#view-user");

elViewUser.innerText = usuario.emailUsuario;