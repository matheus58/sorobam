//var tempo = document.getElementById('tempo').value;
//var quantos_algorismos = document.getElementById('quantos_algorismos').value;
//var quantidade_de_numeros = document.getElementById('quantidade_de_numeros').value;


var arry_conta = [];



 
//tempo /relogio 
function relogio(){
    var tempo = document.getElementById('tempo').value;
    var tempo_em_segundos = tempo * 60 ;
    //atualizar o cronometro 
    document.getElementById('cronometro').innerText = formatarTempo(tempo_em_segundos);
    //iniciar cronometro
    var intevalo_valido = setInterval(function(){
        tempo_em_segundos--;
        //atualiza o cronometro :
        document.getElementById('cronometro').innerText = formatarTempo(tempo_em_segundos);
        if(tempo_em_segundos <= 1){
            document.getElementById('cronometro').style.color = "red";
        }
        if( tempo_em_segundos <= 0 ){
            clearInterval(intevalo_valido);
        }
    } , 1000); // Atualizar a cada segundo
}
function formatarTempo(segundos) {
    var minutos = Math.floor(segundos / 60);
    var segundosRestantes = segundos % 60;
    return minutos.toString().padStart(2, "0") + ":" + segundosRestantes.toString().padStart(2, "0");
}

//gerar numeros aleatorios 
function gerar_numero_aleatorio(quantos_algorismos){
    var min = Math.pow(10, quantos_algorismos - 1);
    var max = Math.pow(10, quantos_algorismos) - 1;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function criar_conta(){
    var quantos_algorismos = document.getElementById('quantos_algorismos').value;
    var quantidade_de_numeros = document.getElementById('quantidade_de_numeros').value;
    var conta = " "
    for (var i = 0; i < quantidade_de_numeros; i++) {
        var numeroAleatorio = gerar_numero_aleatorio(quantos_algorismos);
        arry_conta[i] = numeroAleatorio;
        conta += numeroAleatorio;
        if (i < quantidade_de_numeros - 1) {
            conta += " + ";
        }
    }
    document.getElementById("gerarConta").innerText = conta;

}
function verificar_resposta(){
    var resposta_usuario = document.getElementById('resposta').value;
    var resposta = 0;
    for(let con = 0 ; con < arry_conta.length ;con++){ // Use < em vez de >=
        resposta += arry_conta[con]; 
    }
    console.log('Resposta calculada: ' + resposta);
    console.log('Resposta do usuário: ' + resposta_usuario);

    if(parseInt(resposta_usuario) === resposta){ // Converta resposta_usuario para int para garantir comparação numérica
        document.getElementById('resposta').style.color = "green"; // Remova '.element' e use 'style.color'
    }
    else{
        document.getElementById('resposta').style.color = "red"; // Remova '.element' e use 'style.color'
    }
}


