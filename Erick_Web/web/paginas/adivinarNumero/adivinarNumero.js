let numero = 0;
let numeroRandom = 0;
let vidas = 5;

function generarNumeroUnoDiez() {
    numeroRandom = Math.floor(Math.random() * 10) + 1;
    document.getElementById("lblNumero").innerHTML = "Ingresa un número del 1 al 10: ";
}

function generarNumeroUnoCien() {
    numeroRandom = Math.floor(Math.random() * 100) + 1;
    document.getElementById("lblNumero").innerHTML = "Ingresa un número del 1 al 100: ";
}

function generarNumeroUnoMil() {
    numeroRandom = Math.floor(Math.random() * 1000) + 1;
    document.getElementById("lblNumero").innerHTML = "Ingresa un número del 1 al 1000: ";
}

function adivinarNumero() {
    numero = document.getElementById("numero").value;
    alert(numeroRandom);

    if (numero == numeroRandom) {
        Swal.fire({
            title: '¡Correcto!',
            text: 'Tu respuesta es correcta',
            icon: 'success',
            showConfirmButton: false,
            timer: 1200 // Añade un retraso de 1 segundo antes de cerrar el SweetAlert
        }).then(() => {
            document.getElementById("lblNumero").innerHTML = "Presione un boton";
            document.getElementById('pista').innerHTML = "";
        });
    } else {
        document.getElementById('numero').value = "";
        vidas = vidas - 5;

        if (numero < numeroRandom){
            document.getElementById('pista').innerHTML = "Escribe un numero mayor";
        }else if (numero > numeroRandom){
            document.getElementById('pista').innerHTML = "Escribe un numero menor   ";
        }   
        if (vidas == 0) {
            Swal.fire({
                title: '¿Continuar?',
                text: "Se terminaron tus vidas",
                icon: 'info',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí',
                cancelButtonText: 'No   '
              }).then((result) => {
                if (result.isConfirmed) {
                  vidas = 5;
                } else {
                  // Acción a realizar si se cancela
                  Swal.fire(
                    'Gracias por jugar'
                  )
                }
              })
        }
    }
}
