function sim() {
    alert("Você aceitou namorar comigo! :)");

    location.href = "https://www.youtube.com/watch?v=izGwDsrQ1eQ";
};

function desvia(btn) {
    alert("Você não me quis :(")
    btn.style.position = 'absolute';
    btn.style.botton = geraPosicao(10, 90);
    btn.style.left = geraPosicao (10, 90);
    console.log("Opa, desviei...");
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
