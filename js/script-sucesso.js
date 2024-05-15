

//Recuperando o objeto do usuario logado.
 const usuario = JSON.parse(localStorage.getItem("usuario-logado"));

 if(usuario){ 
 const elViewUser = document.querySelector("#view-user");
 elViewUser.innerText = usuario.txtEmail;

 const elLogoutUser = document.querySelector("#logout-user");
 elLogoutUser.addEventListener("click",()=>{
    sessionStorage.removeItem("token");
    localStorage.removeItem("usuario-logado");
    window.location.href = "../index.html";
 });
}
else{
    window.location.href = "../erro.html";
}