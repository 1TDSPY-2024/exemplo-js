
const usuario = JSON.parse(localStorage.getItem("usuario-logado"));

if(usuario){ 
   const elUsername = document.querySelector("#username");
   elUsername.innerText = usuario.userName;

   const elViewUser = document.querySelector("#view-user");
   elViewUser.innerText = usuario.emailUsuario;
   

   console.log(usuario.emailUsuario);
   console.log(usuario.userName);
   

   const elLogoutUser = document.querySelector("#logout-user");
   elLogoutUser.addEventListener("click",()=>{
      localStorage.removeItem("usuario-logado");
      window.location.href = "../index.html";
   });
}
else{
   window.location.href = "../index.html";
}