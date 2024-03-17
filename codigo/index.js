function começar() {
    // Obter o tempo selecionado no menu suspenso
    var tempoSelecionado = document.getElementById("tempo").value;
    // Converter o tempo para segundos
    var tempoEmSegundos = tempoSelecionado * 60;
    
    // Atualizar o elemento de contagem regressiva com o tempo inicial
    document.getElementById("countdown").innerText = formatarTempo(tempoEmSegundos);

    // Iniciar o temporizador
    var intervalId = setInterval(function() {
        tempoEmSegundos--;
        // Atualizar o elemento de contagem regressiva a cada segundo
        document.getElementById("countdown").innerText = formatarTempo(tempoEmSegundos);
        
        // Verificar se o temporizador chegou a zero
        if (tempoEmSegundos <= 0) {
            // Limpar o intervalo quando o temporizador chegar a zero
            clearInterval(intervalId);
        }
    }, 1000); // Atualizar a cada segundo
}

// Função para formatar o tempo em minutos e segundos
function formatarTempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = segundos % 60;
    return minutos.toString().padStart(2, "0") + ":" + segundosRestantes.toString().padStart(2, "0");
}

// Função para gerar números aleatórios com base na quantidade de algarismos
function gerarNumeroAleatorio(algarismos) {
    var min = Math.pow(10, algarismos - 1);
    var max = Math.pow(10, algarismos) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gerarConta() {
    var algarismos = parseInt(document.getElementById("quantos_algorismos").value);
    var quantidadeNumeros = parseInt(document.getElementById("quantidade_de_numeros").value);
    var conta = "";
    var resultado = [];

    for (var i = 0; i < quantidadeNumeros; i++) {
        var numeroAleatorio = gerarNumeroAleatorio(algarismos);
         resultado[i] = numeroAleatorio;  
        conta += numeroAleatorio;
        if (i < quantidadeNumeros - 1) {
            conta += " + ";
        }
    }

    // Exibir a conta gerada na página
    document.getElementById("gerarConta").innerText = conta ;
    return resultado;
}

function verificarResposta(){
    var resposta = 0;
    resposta = document.getElementById("resposta").value;
    var array = gerarConta();
    var resultado = 0 ;

    for(let con = 0 ; con < array.length ; con++){
        resultado = array[con]+resultado;
    }
    console.log(resultado)
    if( resposta === resultado){
        alert("parabens")
    }else(
        alert("resposta errada")
    )
    console.log(array)
    console.log(resposta)
    console.log(resultado)
}
