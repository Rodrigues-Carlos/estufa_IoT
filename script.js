async function carregarDados() {
  try {
    const resposta = await fetch("/dados");
    const json = await resposta.json();
    document.getElementById("umidade").innerText = json.umidade + "%";
  } catch {
    document.getElementById("umidade").innerText = "Erro na leitura";
  }
}

function acionarLed() {
  fetch("/led");
}

function acionarBuzzer() {
  fetch("/buzzer");
}

setInterval(carregarDados, 2000);
carregarDados();