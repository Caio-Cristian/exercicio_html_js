
function validarFomulario(){
    var campoA = document.getElementById("campoA").value;
    var campoB = document.getElementById("campoB").value;

    campoA = parseFloat(campoA);
    campoB = parseFloat(campoB);

    if (campoA < campoB) {
        alert("Seu formulario é valido")
        return true;
    } else {
        alert("Seu formulario é invalido, o valor do Campo B não é maior que o valor do Campo A.");
        return false;
    }
}
