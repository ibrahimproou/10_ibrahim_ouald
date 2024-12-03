function cambiarcolor() {
var div = document.getElementById('color');
var divcolor = div.style.backgroundColor;
if (divcolor == "white") {
    div.style.backgroundColor = "pink"
}
else if (divcolor == "pink") {
    
}
else {
div.style.backgroundColor = "white";
}
}
function hola() {
    document.getElementById("color").innerHTML += " HOLA!";
}
function adios() {
    document.getElementById("color").innerHTML += " adios!";
}