let login = document.querySelector("#inputEmail")

let mensagemLogin = document.querySelector("#emailLogin")

let mensagemSenha = document.querySelector("#senhaLogin")

let senha = document.querySelector("#inputPassword")

let botao = document.querySelector("#botaoAcessar")

let formulario = document.querySelector("form")

let validacaoEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

let erroLogin = document.getElementById("erroLogin")

function emailValida(){

    

        if(validacaoEmail.test(login.value)){
            login.style.borderColor = "green"
            mensagemLogin.style.display = "none"
            validar()
        }else{
            login.style.borderColor = "red"
            mensagemLogin.style.display = "block"
            naoValidado()
        }
    login.addEventListener("blur", function(){
        if(validacaoEmail.test(login.value)){
            login.style.borderColor = "#f2f2f2"
        }
        else{
            login.style.borderColor = "red"
            mensagemLogin.style.display = "block"
            naoValidado()
        }
    })
    login.addEventListener("focus", function(){
        if(validacaoEmail.test(login.value)){
            login.style.borderColor = "green"
        }
        else{
        login.style.borderColor = "red"
        mensagemLogin.style.display = "block"
        naoValidado()
        }
        
    })
}

let validacaoSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/

function senhaValida(){

        if(validacaoSenha.test(senha.value)){
            senha.style.borderColor = "green"
            mensagemSenha.style.display = "none"
            validar()
        }
        else{
            senha.style.borderColor = "red"
            mensagemSenha.style.display = "block"
            naoValidado()
        }


    senha.addEventListener("focus", function(){
        if(validacaoSenha.test(senha.value)){
            senha.style.borderColor = "green"
        }
        else{
            senha.style.borderColor = "red"
            naoValidado()
        }
    })
    senha.addEventListener("blur", function(){
        if(validacaoSenha.test(senha.value)){
            senha.style.borderColor = "#f2f2f2"
        }
        else{
            senha.style.borderColor = "red"
            naoValidado()
        }
    })
} 

function validar(){
    
    if(validacaoEmail.test(login.value) && validacaoSenha.test(senha.value)){
        botao.removeAttribute("disabled")
        botao.style.backgroundColor = "#7898ff"
        let corpo = {
            email: login.value,
            password: senha.value
            }
        let corpoJSON = JSON.stringify(corpo)    
        
        valorCampos(corpoJSON) 
    }
} 


function naoValidado(){

    if(!validacaoEmail.test(login.value) || !validacaoSenha.test(senha.value)){
        botao.setAttribute("disabled", "")
        botao.style.backgroundColor = "grey"
    }
}

function valorCampos(JSON){
    console.log(JSON);

    loginValida(JSON)
}

async function loginValida(objvalorCampos){
    let configs = {
        method: "POST",
        headers:{
            "Content-type": "application/json"
        },
        body: objvalorCampos
    }
    try{
        let login = await fetch(`${baseURL()}/users/login`, configs)
        if(login.status == 201){
            let loginResponse = await login.json()
            // botao de prevent, não envia enquanto o usuario não clicar no botão
            botao.addEventListener("click", function(e){
                e.preventDefault()
                loginSucesso(loginResponse)
            })
                
        }
        else{
            throw login;
        }
    }
    catch (erro){
        // botao de prevent, não envia enquanto o usuario não clicar no botão
        botao.addEventListener("click", function(e){
            e.preventDefault()
            loginErro(erro)
        })
        
    }
}


 function loginSucesso(resposta) {
    console.log(resposta.jwt);

    //Salva o token no cliente/front end

    sessionStorage.setItem("jwt", resposta.jwt)

    location.href = "tarefas.html";

    //Direciona o usuário pra pagina de tarefas
}

function loginErro(resposta){
    if(resposta.status == 400 || resposta.status == 404){
        erroLogin.style.display = "block"
    }
}

/* function loginErro(resposta) {
    console.log(resposta);
    if (resposta.status == 400 || resposta.status == 404) {
        alert("E-mail e/ou senha inválidos.")
    }
} */




