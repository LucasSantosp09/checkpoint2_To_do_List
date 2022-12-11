// Ainda está faltando:
//Ambos os campos devem ser normalizados (ex: retirar espaços desnecessários);
//Os campos “senha” e “repetir senha” devem possuir a mesma informação para serem considerados válidos;

//Variaveis que ligam com o html e armazenam os dados

let botao = document.getElementById("salvar");
botao.addEventListener("click", function(evento){

    let inputNome = document.getElementById("name").value;
    let inputSobrenome = document.getElementById("sobrenome").value;
    let inputEmail_1 = document.getElementById("email").value;
    let inputPassword_1 = document.getElementById("password").value;
    //let inputPassword_2 = document.getElementById("password_1").value;


    if (inputNome) {

    //evento.preventDefault(); "código para evitar de limpar a página depois do click"
    
    console.log(evento);
    console.log("Informações do Usuário");
    console.log(inputNome);
    console.log(inputSobrenome);
    console.log(inputEmail_1);
    console.log(inputPassword_1);
    //console.log(inputPassword_2);

    let usuario = { // "Informações em objeto"
        nome: inputNome,
        sobrenome: inputSobrenome,
        email:inputEmail_1,
        password: inputPassword_1,
        //passwordRed: inputPassword_2,
    }

    console.log(usuario);
}
});

// Validando nome

let inputName = document.getElementById("name");

inputName.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputName.style.backgroundColor = "ligth gray"
});

inputName.addEventListener("keyup", function(){

    let informacao = document.getElementById("infoName");


    console.log("Saiu do Campo");
    inputName.style.backgroundColor = "light blue"

    if (inputName.value.length >=4) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputName.style.border = "solid 1.5px green";
        informacao.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputName.style.border = "solid 1.5px red";
        informacao.innerText = "Informe no mínimo 4 caracteres";
        informacao.style.color = "red";
        informacao.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);

    };

});

// Validando Sobrenome

let inputSobreNome = document.getElementById("sobrenome");

inputSobreNome.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputSobreNome.style.backgroundColor = "ligth gray"
});

inputSobreNome.addEventListener("keyup", function(){

    let informacao_1 = document.getElementById("infoSobrenome");


    console.log("Saiu do Campo");
    inputSobreNome.style.backgroundColor = "light blue"

    if (inputSobreNome.value.length >=4) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputSobreNome.style.border = "solid 1.5px green";
        informacao_1.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputSobreNome.style.border = "solid 1.5px red";
        informacao_1.innerText = "Informe no mínimo 4 caracteres";
        informacao_1.style.color = "red";
        informacao_1.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);
    };

});

// Validando Email

let inputEmail = document.getElementById("email");

inputEmail.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputEmail.style.backgroundColor = "ligth gray"
});

inputEmail.addEventListener("keyup", function(){

    let informacao_2 = document.getElementById("infoEmail");


    console.log("Saiu do Campo");
    inputEmail.style.backgroundColor = "light blue"

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(inputEmail.value)) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputEmail.style.border = "solid 1.5px green";
        informacao_2.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputEmail.style.border = "solid 1.5px red";
        informacao_2.innerText = "Informe um email válido";
        informacao_2.style.color = "red";
        informacao_2.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);
    };

});

//Validando Password

let inputPassword = document.getElementById("password");

inputPassword.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputPassword.style.backgroundColor = "ligth gray"
});

inputPassword.addEventListener("keyup", function(){

    let informacao_3 = document.getElementById("infoPassword");


    console.log("Saiu do Campo");
    inputPassword.style.backgroundColor = "light blue"

    if (inputPassword.value.length >=8) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputPassword.style.border = "solid 1.5px green";
        informacao_3.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputPassword.style.border = "solid 1.5px red";
        informacao_3.innerText = "Informe no mínimo 8 caracteres";
        informacao_3.style.color = "red";
        informacao_3.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);

    };

});

/*/ Validando Repetição do Password

let inputPasswordRep = document.getElementById("password_1");

inputPasswordRep.addEventListener("focus", function(){
    console.log("Clicou no campo");
    inputPasswordRep.style.backgroundColor = "ligth gray"
});

inputPasswordRep.addEventListener("keyup", function(){

    let informacao_4 = document.getElementById("infoPassword_1");


    console.log("Saiu do Campo");
    inputPasswordRep.style.backgroundColor = "light blue"

    if (inputPasswordRep.value.length >=4) {
        //console.log("Sucesso"); "Sucesso na Validação"
        inputPasswordRep.style.border = "solid 1.5px green";
        informacao_4.innerText = "";

        //Habilitando o Botão
        botao.removeAttribute("disabled");
    
    }
    else{
        //console.log("Falha"); "Falha na Validação"
        inputPasswordRep.style.border = "solid 1.5px red";
        informacao_4.innerText = "Informe no mínimo 8 caracteres";
        informacao_4.style.color = "red";
        informacao_4.style.fontWeight = "bold";

        //Desabilitando o botão
        botao.setAttribute("disabled", true);

    };

});*/