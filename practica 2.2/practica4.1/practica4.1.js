function cambiarcolor() {
    var div = document.getElementById("color");
    var divcolor = div.style.backgroundColor;
    if (divcolor == "blue") {
        div.style.backgroundColor = "pink";
    }
    else if (divcolor == "pink") {
        div.style.backgroundColor = "white";
    }
    else {
        div.style.backgroundColor = "blue";
    }
}

function hola() {
    document.getElementById("color").innerHTML += "Hola";
}