   
    const botao = document.getElementById("btnCor");

    botao.addEventListener("click", function() {

      const cores = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

      const corAleatoria = cores[Math.floor(Math.random() * cores.length)];

      botao.style.backgroundColor = corAleatoria;
    });