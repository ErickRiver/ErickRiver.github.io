let puntosEquipo1 = 0;
let puntosEquipo2 = 0;
let turnos = 9;

function nombrarEquipos() {
    equipo1 = document.getElementById("txtEquipo1").value;
    equipo2 = document.getElementById("txtEquipo2").value;
    
    document.getElementById("lblEquipo1").innerHTML = equipo1;
    document.getElementById("lblEquipo2").innerHTML = equipo2;
}

function jugar(){
    document.getElementById("lblAtacante").innerHTML = equipo1 + " es el atacante";
    puntosEquipo1 += document.getElementById("txtEquipo1").value;
    
    document.getElementById("lblAtacante").innerHTML = equipo2 + " es el atacante";
    puntosEquipo2 += document.getElementById("txtEquipo2").value;
    turnos--;
}