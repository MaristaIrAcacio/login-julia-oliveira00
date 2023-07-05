function acessar() {

    let loginEmail = document.getElementById("loginEmail").value;
    let loginSenha = document.getElementById("loginSenha").value;
 
    if(!loginEmail || !loginSenha) {
        alert("favor preencha os campos para acessar o site");
    } else {
        window.location.href = "aula2.html";
		console.log(window.location.href);
    }

}

var dadosLista = [];
function salvarUser(){

    let nomeUser = document.getElementById("nomeUser").value;

    if(nomeUser){
        dadosLista.push(nomeUser);
        // console.log(dadosLista);
    }

}

function criaListat(){
    let tabela = document.getElementById("tabela").innerHTML = "<tr><th>Nome Usuário</th><th>Ações</th></tr>";
    for(let i=0; i <= (dadosLista.length-1); i++){
        tabela += "<tr><td>" + dadosLista[i] + "</td><td><button class='btn btn-sucess' onclick=''>Editar</button><button class='btn btn-danger' onclick=''>Excluir</button></td></tr>";
        document.getElementById('tabela').innerHTML = tabela;
    }
}