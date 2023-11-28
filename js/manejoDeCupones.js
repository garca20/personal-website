const listaCupones = ["DISC-2023", "30BY-EBYE", "CINC-UENT"]
const listaCuponesEfectos = [0.75, 0.7, 0.5]


function validarNumero(precio) {
    let dinero = document.getElementById("numeroA").value
    let esNumero = !(isNaN(dinero) || dinero.length == 0)
    if (esNumero) {
        if (dinero<precio) {
            document.getElementById("warning_text_1").innerText = "No hay dinero suficiente"
        }
        else {
            var dineroRestante = (parseInt(dinero)-parseInt(precio))
            document.getElementById("warning_text_1").innerText = "Validado, dinero restante: $ "+dineroRestante
            document.getElementById("cupon").value = ""
        }
    }
    else {
        document.getElementById("warning_text_1").innerText = "No es un número válido"
    }
}

function validarCupon(precio) {
    let cupon = document.getElementById("cupon").value
    for (let posicion=0; posicion<listaCupones.length; posicion++) {
        if (listaCupones[posicion]==cupon) {
            let dinero = document.getElementById("numeroA").value
            var dineroRestante = Math.round((parseInt(dinero)-(parseInt(precio)*listaCuponesEfectos[posicion])))
            document.getElementById("warning_text_1").innerText = "Cupón aplicado, dinero restante: $ "+dineroRestante
        }
    }
}

function alertar() {
    alert("Producto no encontrado :(")
    document.getElementById("search").value = ""
}