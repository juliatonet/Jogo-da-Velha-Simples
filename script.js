let estadoDoJogo = true;
let tentativas = 9;



function marcarCasa(event, numCasa) {
  if (estadoDoJogo == true) {
    let casa = event.target;
    tentativas--;
    bloquearCasa(casa);
    casa.style.background = "red";
    alert(`Você selecionou a casa de número ${numCasa}.`);
    jogadorDaVez();
    vencedor();
  }
}



let turno = document.getElementById('sJogadorDaVez');
let jogador = "X";

function jogadorDaVez() {
  let casinha = event.target
  if (jogador === "X") {
    jogador = "O";
    turno.innerText = jogador;
    casinha.innerHTML = "<span>X</span>";
  } else {
    jogador = "X"
    turno.innerText = jogador;
    casinha.innerHTML = "<span>O</span>";
  }
}

let casa1 = document.getElementById('casa1');
let casa2 = document.getElementById('casa2');
let casa3 = document.getElementById('casa3');
let casa4 = document.getElementById('casa4');
let casa5 = document.getElementById('casa5');
let casa6 = document.getElementById('casa6');
let casa7 = document.getElementById('casa7');
let casa8 = document.getElementById('casa8');
let casa9 = document.getElementById('casa9');

function bloquearCasa(casa) {
  if (casa.innerText !== "") {
    alert(`Casa já preenchida`);
    tentativas++;
    console.log(tentativas);
    marcarCasa();
  }
}
let exibirVencedor = document.getElementById('exibirVencedor');
let jogadorVencedor = "";

function vencedor() {
  let vencedor = false;
  if (casa1.innerText === "X" && casa2.innerText === "X" && casa3.innerText === "X") {
    alert(`Jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (casa4.innerText === "X" && casa5.innerText === "X" && casa6.innerText === "X") {
    alert(`Jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (casa7.innerText === "X" && casa8.innerText === "X" && casa9.innerText === "X") {
    alert(`Jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (casa1.innerText === "O" && casa2.innerText === "O" && casa3.innerText === "O") {
    alert(`Jogador O venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>O</span>"
    jogadorVencedor = "0";
  } else if (casa4.innerText === "O" && casa5.innerText === "O" && casa6.innerText === "O") {
    alert(`Jogador O venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (casa7.innerText === "O" && casa8.innerText === "O" && casa9.innerText === "O") {
    alert(`Jogador O venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
    /*COLUNAS*/
  } else if (casa1.innerText === "X" && casa4.innerText === "X" && casa7.innerText === "X") {
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (casa2.innerText === "X" && casa5.innerText === "X" && casa8.innerText === "X") {
    jogadorVencedor = "X";
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (casa3.innerText === "X" && casa6.innerText === "X" && casa9.innerText === "X") {
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (casa1.innerText === "O" && casa4.innerText === "O" && casa7.innerText === "O") {
    alert(`O jogador 0 venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (casa2.innerText === "O" && casa5.innerText === "O" && casa8.innerText === "O") {
    alert(`O jogador 0 venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (casa3.innerText === "O" && casa6.innerText === "O" && casa9.innerText === "O") {
    alert(`O jogador 0 venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  }
  /*DIAGONAIS*/
  else if (casa1.innerText === "X" && casa5.innerText === "X" && casa9.innerText === "X") {
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (casa3.innerText === "X" && casa5.innerText === "X" && casa7.innerText === "X") {
    alert(`O jogador X venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>X</span>"
    jogadorVencedor = "X";
  } else if (casa1.innerText === "O" && casa5.innerText === "O" && casa9.innerText === "O") {
    alert(`O jogador 0 venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (casa3.innerText === "O" && casa5.innerText === "O" && casa7.innerText === "O") {
    alert(`O jogador O venceu!`);
    estadoDoJogo = false;
    vencedor = true;
    exibirVencedor.innerHTML = "<span>0</span>"
    jogadorVencedor = "0";
  } else if (tentativas == 0 && vencedor == false) {
    alert(`Deu velha.`)
    exibirVencedor.innerHTML = "<span>Empate</span>"
  }
  pontuacao();
}

function reiniciar() {
  exibirVencedor.innerHTML = "<span></span>"
  estadoDoJogo = true;
  tentativas = 9;
  jogadorVencedor = "";
  casa1.style.background = "#e392fe";
  casa1.innerHTML = "<span></span>";
  casa2.style.background = "#e392fe";
  casa2.innerHTML = "<span></span>";
  casa3.style.background = "#e392fe";
  casa3.innerHTML = "<span></span>";
  casa4.style.background = "#e392fe";
  casa4.innerHTML = "<span></span>";
  casa5.style.background = "#e392fe";
  casa5.innerHTML = "<span></span>";
  casa6.style.background = "#e392fe";
  casa6.innerHTML = "<span></span>";
  casa7.style.background = "#e392fe";
  casa7.innerHTML = "<span></span>";
  casa8.style.background = "#e392fe";
  casa8.innerHTML = "<span></span>";
  casa9.style.background = "#e392fe";
  casa9.innerHTML = "<span></span>";
  marcarCasa();
}

let placarX = document.getElementById('placarX');
let placarO = document.getElementById('placarO');
let placarDoX = 0;
let placarDoO = 0;

function pontuacao() {
  if (jogadorVencedor == "X") {
    placarDoX++;
    placarX.innerHTML = `<span id="placarX">${placarDoX}</span>`;
  } else if (jogadorVencedor == "0") {
    placarDoO++;
    placarO.innerHTML = `<span id="placarX">${placarDoO}</span>`;
  }
}
