
let cards = ['bobrossparrot', 'explodyparrot', 'fiestaparrot', 'metalparrot', 'tripletsparrot', 'unicornparrot', 'revertitparrot'];
let qtdDeCartas;
let baralho = [];
let carta;
let carta1;
let carta2;
let contador = 0;
let acertouOsCards = 0;
let segundos = 0;
let tempo = 0;

function inicioDoJogo (){
    alert("Para jogar Parrot você deve informar um quantidade par de cartas entre 4 e 14");
    qtdDeCartas = Number(prompt("Com quantas cartas você quer jogar?"));

    while (qtdDeCartas < 4 || qtdDeCartas % 2 !== 0 || qtdDeCartas > 14) {
        alert("Quantidade inválida")
        qtdDeCartas = Number(prompt("Informe uma quantidade par de cartas"))
    }
    alert("Bem vindo ao Parrot Card Game")
}

function formaParesDeCards (){
    for (let i = 0; i < qtdDeCartas/ 2; i++){
        const duplicaCards = cards [i] ;
        baralho.push(duplicaCards);
        baralho.push(duplicaCards);
        console.log(baralho, duplicaCards);
    }
    baralho.sort(embaralhar);
    distribuiCards ();
}

function distribuiCards (){
    const linha1 = document.querySelector(".linha1");
    console.log(baralho.length, qtdDeCartas)

        for (let i = 0;  i < baralho.length; i++){
            carta = `
                <li class = "card" onclick="mostrarParrot(this)">
                    <div class='praCima'>
                        <img src='imagens/front.png'>
                    </div>
                    <div class='praBaixo card'>
                        <img src='imagens/${baralho[i]}.gif'>
                    </div>
                </li>
            `
            linha1.innerHTML += carta;
        }
}

function mostrarParrot(cartaClicada){ 
    if (cartaClicada.classList.contains("virada") || carta2 !== undefined){
        return;
    }
    contador++;
    cartaClicada.classList.add("virada");
    if (carta1 === undefined){
        carta1 = cartaClicada;
    } else {
        carta2 = cartaClicada;
        if (carta1.innerHTML === carta2.innerHTML){
            acertouOsCards += 2;
            terminouJogo();
            voltarAoNormal();
        } else{
            setTimeout (desvirarCarta, 1000)
        }
    }
}

function desvirarCarta (){
    carta1.classList.remove("virada");
    carta2.classList.remove("virada");
    voltarAoNormal ();
}

function voltarAoNormal (){
    carta1 = undefined;
    carta2 = undefined;
}

function terminouJogo () {
    if (acertouOsCards === qtdDeCartas){
        clearInterval(tempo);
        alert(`Parabéns, você venceu em ${contador} jogadas, em ${segundos} segundos!`)
    }
}

function embaralhar (){
    return Math.random () - 0.5;
}

inicioDoJogo ()
formaParesDeCards ()

tempo = setInterval (function(){
    segundos++;
    document.querySelector(".relogio").innerHTML = segundos
}, 1000);
