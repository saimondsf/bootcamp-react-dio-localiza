function clique(){
    document.getElementById("textoAgradecimento").innerHTML = "Clique para acessar o Google";
    console.log(document.getElementById("textoAgradecimento"));
}


function redirecionar(){
    window.open("https://www.google.com/");
    //window.location.href = "https://www.google.com/";
}

function trocar(elemento){
    //document.getElementById("movimentoMouse").innerHTML = "Oops";
    elemento.innerHTML = "Oops";
}

function voltar(elemento){
    //document.getElementById("movimentoMouse").innerHTML = "Passe o mouse aqui";
    elemento.innerHTML = "Passe o mouse aqui";
}

function load(){
    alert("A página carregou");
}

function funcaoChange(elemento){ //mudar a cor do site
    console.log(elemento.value);
}