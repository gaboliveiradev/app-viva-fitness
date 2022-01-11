const btn = document.getElementById("send");

btn.addEventListener("click", function(e) {
    e.preventDefault();

    const peso = document.getElementById("peso");
    const altura = document.getElementById("altura");
    const idade = document.getElementById("idade");

    const valPeso = peso.value;
    const valAltura = altura.value;
    const valIdade = idade.value;

    const tmb = Math.floor(66 + (13.8 * valPeso) + (5 * valAltura) - (6.8 * valIdade));
    document.getElementById("resultado").innerHTML=`Sua Taxa De Metabolismo Basal é de ${tmb}`;
});