const botoes = document.querySelectorAll("button");

botoes.forEach(function (botao) {
    let curtiu = false;
    botao.addEventListener("click", botaoClicado);
    function botaoClicado() {
        console.log("fui clicado");
        let text = botao.querySelector("span");
        if ( curtiu === false){
            text.textContent++;
            curtiu = true;
        } else {
            text.textContent--;
            curtiu = false;
        }
       
    }
})