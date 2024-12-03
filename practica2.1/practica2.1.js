function calcularNotaFinal() {
    var notaPrimeraEv = document.getElementById("Nota_primera_ev").Value;
    console.log("Nota primer input: " + notaPrimeraEv);
    var notaSegundaEv = document.getElementById("nota_segunda_ev").Value;
    console.log("nota segundo input: " + notaSegundaEv);
    var nombre = document.getElementById("nombre").Value;
    var divResultado = document.getElementById("resultado");
    var notaFinal = calcularMedia(notaPrimeraEv, notaSegundaEv);
    console.log("nota media: " + notaFinal)
    if (notaFinal >= 5) {
        divResultado.style.backgroundColor = "green";
        divResultado.innerHTML = "Has Aprobado, " + nombre + ". Tu nota es " + notaFinal;
    }
    else{
        divResultado.style.backgroundColor = "red";
        divResultado.innerHTML = "Has suspendido, " + nombre ". Tu nota es " + notaFinal;
    }
}
function calcularMedia(valor1, valor2) {
    return (parseInt(valor1) + parseInt(valor2))/2;
}