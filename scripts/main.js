var nome = "";
var secaoSelecionaIdade = `<select id='selecionadorIdade' onchange="funcaoChange(this)">
                            <option value="1"></option>
                            <option value="2">- 18</option>
                            <option value="3">+ 18</option> </select>`
var respostaWindowConfirm = true;

load = () => {
    window.alert('Olá');
    respostaWindowConfirm = window.confirm('Vamos começar?');

    if (respostaWindowConfirm) {
        nome = window.prompt('Qual é seu nome?');
        if (nome==="") {nome = "Aristillus";}
        document.getElementsByTagName('a')[0].innerHTML = `<h1 onmouseover="trocar(this)" onmouseout="voltar(this)">Bem-vindo</h1>`;
        document.getElementById('redirecionadorPagina').innerHTML = `<button type="button" onclick="redirecionar()">Redirecionar</button>`; 
        document.getElementById('textoInicial').innerHTML = `Agora que já sei o seu nome vamos em frente!`;
        document.getElementById('textoInformativo').innerHTML = `Seu nome tem ${nome.length} letras.<br/>Maiúsculo é ${nome.toUpperCase()}.<br/>Minúsculo é ${nome.toLowerCase()}.<br/>`;
        document.getElementById('botaoProsseguir').innerHTML = `<button type="button" onclick="primeiroBotao()">Prosseguir</button>`;
    }
    else {
        window.alert('Nãaaaaaaao ' + nome);
        document.getElementsByTagName('a')[0].innerHTML = `<h1>Que pena...</h1>`;
    }

    var a = window.document.getElementById("area");
    a.addEventListener('click', clicar)
    a.addEventListener('mouseenter',entrar)
    a.addEventListener('mouseout', sair)

    function clicar() {
        a.innerText = 'Clicou!'
        a.style.background = 'red'
    }
    function entrar(){
        a.innerText = 'Entrou'
        a.style.background = 'salmon'
    }
    function sair(){
        a.innerText = 'Saiu'
        a.style.background = 'salmon'
    }
}

redirecionar = () => {
    window.open("https://www.google.com/");
}

trocar = (elemento) => {elemento.innerHTML = `${nome}`;}

voltar = (elemento) => {elemento.innerHTML = "Bem-vindo";}

primeiroBotao = () => {
    document.getElementById('textoIdade').innerHTML = `Qual a sua idade?`;
    funcaoChange(0);
    document.getElementById('selecionadorIdade').innerHTML = secaoSelecionaIdade;
}

funcaoChange = (elemento) => {
    switch (Number(elemento.value)) {
        case 1:
            document.getElementById('resultadoSelecionador').innerHTML = `...`;
            break;
        case 2:
            document.getElementById('resultadoSelecionador').innerHTML = `Ok!`;
            break;
        case 3:
            document.getElementById('resultadoSelecionador').innerHTML = `Muito bem!`;
            break;
        default:
            document.getElementById('resultadoSelecionador').innerHTML = ``;
            break;
    }
}

somar = () => {
    var n1 = Number(window.document.getElementById('numero1').value)
    var n2 = Number(window.document.getElementById('numero2').value)
    var soma = window.document.getElementById('resultadoSoma');
    var somaMod = window.document.getElementById('resultadoSomaMod');
    var s = n1 + n2;
    soma.innerHTML = `A soma entre ${n1} + ${n2} = ${s}`
    somaMod.innerHTML = `A soma entre ${n1.toFixed(1)} + ${n2.toFixed(2).replace('.', ',')} = ${s}`
}