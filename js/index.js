// index.js
// Função para selecionar o botão em qualquer bloco
function selecionarBotao(botao) {
    // Remover a classe "selecionado" de todos os botões no mesmo bloco
    var bloco = botao.closest('.bloco-resposta');
    var botoes = bloco.querySelectorAll('button');
    botoes.forEach(function (btn) {
        btn.classList.remove('selecionado');
    });

    // Adicionar a classe "selecionado" ao botão clicado
    botao.classList.add('selecionado');
}


// Adicione um ouvinte de evento a um botão específico (substitua "idDoBotao" pelo ID real)


// Função para ser executada quando o botão for clicado
function onClickBotao() {
    // Criar o novo elemento com o HTML desejado
    var novoElemento = document.createElement("div");
    novoElemento.className = "c-iBLvYu";
    novoElemento.innerHTML = '<h1>É um prazer ter você aqui!</h1><p>Empresas de todo o Brasil precisam de você e estão dispostas a pagar muito bem por isso!</p><div><a href="./nubank.html"><button id="botao2">Quero ganhar R$100,00 ainda hoje!</button></a></div>';

    // Encontrar o pai do elemento atual
    var paiElemento = document.querySelector('.c-iBLvYu');

    // Se o paiElemento não foi encontrado, você pode ajustar o seletor ou verificar se existe
    if (!paiElemento) {
        console.error("Elemento pai não encontrado!");
        return;
    }

    // Remover o elemento atual
    paiElemento.parentNode.removeChild(paiElemento);

    // var elementoPai = document.getElementById("incluir");
    var elementoComClasse = document.querySelector('.c-EcDxy');
    elementoComClasse.insertAdjacentHTML("afterend", novoElemento.outerHTML);
    document.getElementById("botao2").addEventListener("click", Etapa1);
}


// Adicionar um ouvinte de eventos ao botão após o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
    var meuBotao = document.getElementById("meuBotao");
    var nomeInicio = document.getElementById("nomeInicio").value

    if (meuBotao) {
            meuBotao.addEventListener("click", onClickBotao);
    } else {
        console.error("Botão não encontrado!");
    }
});

function selecionarBotao(botao) {
    console.log('executou')
    // Remover a classe "selecionado" de todos os botões
    var botoes = document.querySelectorAll('.c-cRwLlm button');
    botoes.forEach(function (btn) {
        btn.classList.remove('selecionado');
    });

    // Adicionar a classe "selecionado" ao botão clicado
    botao.classList.add('selecionado');
}



// Saldo

let saldo = 0

// Obter referências aos elementos do DOM
var popup = document.getElementById('popup');
var overlay = document.createElement('div');
overlay.className = 'overlay';

// Função para exibir o popup
function exibirPopup() {

    if (saldo != 100) {
        popup.style.display = 'block';
        overlay.style.display = 'block';
    } else {
        console.log('Redirect')
    }

}

// Função para ocultar o popup
function ocultarPopup() {
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Adicionar eventos aos elementos relevantes
document.getElementById('click_saque').addEventListener('click', exibirPopup);
overlay.addEventListener('click', ocultarPopup);

// Adicionar overlay ao corpo do documento
document.body.appendChild(overlay);



