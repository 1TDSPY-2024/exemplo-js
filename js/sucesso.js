

let tokenUser = sessionStorage.getItem("token");

if(tokenUser != "" && tokenUser != undefined){ 

   const usuario = JSON.parse(localStorage.getItem("usuario-logado"));

   const elUsername = document.querySelector("#username");

   elUsername.innerText = usuario.userName;

   const elViewUser = document.querySelector("#view-user");
   elViewUser.innerText = usuario.userEmail;
   

   console.log(usuario.userEmail);
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