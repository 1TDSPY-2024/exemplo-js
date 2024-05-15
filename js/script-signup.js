
let senha = document.getElementById("idSenha");
let senhaConf = document.getElementById("idConfSenha");
let iconEye = document.querySelector("i");
let iconEye2 = document.querySelector("i2");
iconEye.addEventListener('click', function(){
    if(this.className == "fa-regular fa-eye-slash"){
        this.setAttribute("class","fa-regular fa-eye");
        senha.setAttribute("type", "text");
        
    }else{
        this.setAttribute("class","fa-regular fa-eye-slash");
        senha.setAttribute("type", "password");
        
    }
})
iconEye2.addEventListener('click', function(){
    if(this.className == "fa-regular fa-eye-slash"){
        this.setAttribute("class","fa-regular fa-eye");
        senhaConf.setAttribute("type", "text");  
    }else{
        this.setAttribute("class","fa-regular fa-eye-slash");
        senhaConf.setAttribute("type", "password");
    }
})

const registraUsuario = (inputNome, inputCpf, 
    inputGen, inputEmail, inputSenha, inputConfSenha) =>{

        if(inputSenha.value == inputConfSenha.value){
            //deixando o label verde pq as senhas conferem
            document.querySelector("label[for=idConfirmarSenha").setAttribute("class","sucesso");
            //voltando o campo ao normal quando recebe o foco;
            inputConfSenha.addEventListener("focus",()=>{
                document.querySelector("label[for=idConfirmarSenha]").setAttribute("class","");
            });

            const usuario = {
                nome: inputNome,
                cpf: inputCpf.value,
                genero: inputGen.value,
                email: inputEmail.value,
                senha: inputSenha.value
            }

            //recupera o banco do localStorage e adiciona o objeto usuario na listaUser
            let listaUser = JSON.parse(localStorage.getItem("listaUser"));

            //adicionando de fato o objeto na lista com o metodo push
            listaUser.push(usuario);

            localStorage.setItem("listaUser",JSON.stringify(listaUser));

            return false;
        }else{
            //deixando o label em vermelho pq as senhas n coincidem
            document.querySelector("label[for=idConfirmarSenha]").setAttribute("class","erro");
            return false;
        }
}