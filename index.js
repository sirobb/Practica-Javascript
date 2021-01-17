function Grupo(equipo1, equipo2) {
    this.equipo1 = equipo1
    this.equipo2 = equipo2
}

const grupoA = new Grupo("Chile", "Peru"), grupoB = new Grupo("Austria", "Argentina")
    , grupoC = new Grupo("Colombia", "Venezuela"), grupoD = new Grupo("Portugal", "Francia")
    , grupoE = new Grupo("Holanda", "España"), grupoF = new Grupo("Inglaterra", "Italia")
    , grupoG = new Grupo("Egipto", "Rusia"), grupoH = new Grupo("Uruguay", "Serbia")
const faseEliminatorias = ["Chile", "Peru", "Austria", "Argentina", "Colombia", "Venezuela", "Portugal", "Francia",
    "Holanda", "España", "Inglaterra", "Italia", "Egipto", "Rusia", "Uruguay", "Serbia"]
const cuartosDeFinal = []
const semiFinales = []
const tercerYcuarto = []
const final = []

const generaScore1 = function () {
    const min = 0, max = 10
    return Math.floor((Math.random() * (max - min + 1)) + min);
}
const generaScore2 = function () {
    const min = 0, max = 10
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

function jugarOctavos(equipo1, score1, equipo2, score2) {

    if (score1 > score2) {
        cuartosDeFinal.push(equipo1)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1}`)
    } else if (score2 > score1) {

        cuartosDeFinal.push(equipo2)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo2}`)
    } else if (score1 === score2) {

        cuartosDeFinal.push(equipo1)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1}`)
    }
}
function jugar4tos(equipo1, score1, equipo2, score2) {

    if (score1 > score2) {
        semiFinales.push(equipo1)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1}`)
    } else if (score2 > score1) {

        semiFinales.push(equipo2)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo2}`)
    } else if (score1 === score2) {

        semiFinales.push(equipo1)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1}`)
    }
}
function jugarsemifinal(equipo1, score1, equipo2, score2) {

    if (score1 > score2) {
        final.push(equipo1)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1}`)
    } else if (score2 > score1) {

        final.push(equipo2)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo2}`)
    } else if (score1 === score2) {

        final.push(equipo1)
        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1}`)
    }
}
function jugartercerYcuarto(equipo1, score1, equipo2, score2) {

    if (score1 > score2 ) {

        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1}`)
    } else if (score2 > score1 ) {


        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo2}`)
    } else if (score1 === score2 ) {


        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1}`)
    }
}
function jugarfinal(equipo1, score1, equipo2, score2) {

    if (score1 > score2) {

        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1} GANA EL MUNDIAL!!!`)
    } else if (score2 > score1) {


        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo2} GANA EL MUNDIAL!!!`)
    } else if (score1 === score2) {


        return console.log(`${equipo1} ${score1} vs ${equipo2} ${score2} => ${equipo1} GANA EL MUNDIAL!!!`)
    }
}


console.log(`================================================`)
console.log(`======COMIENZO DE LA FASE DE ELIMINATORIAS======`)
console.log(`================================================`)
console.log(`PLAY OFF`)
faseEliminatorias.forEach(iterador => {
    console.log(iterador)
});
console.log("===OCTAVOS DE FINAL===")
jugarOctavos(grupoA.equipo1, generaScore1(), grupoB.equipo2, generaScore2())
jugarOctavos(grupoA.equipo2, generaScore1(), grupoB.equipo1, generaScore2())
jugarOctavos(grupoC.equipo1, generaScore1(), grupoD.equipo2, generaScore2())
jugarOctavos(grupoC.equipo2, generaScore1(), grupoD.equipo1, generaScore2())
jugarOctavos(grupoE.equipo1, generaScore1(), grupoF.equipo2, generaScore2())
jugarOctavos(grupoE.equipo2, generaScore1(), grupoF.equipo1, generaScore2())
jugarOctavos(grupoG.equipo1, generaScore1(), grupoH.equipo2, generaScore2())
jugarOctavos(grupoG.equipo2, generaScore1(), grupoH.equipo1, generaScore2())

console.log(`===CUARTOS DE FINAL===`)
jugar4tos(cuartosDeFinal[0], generaScore1(), cuartosDeFinal[1], generaScore2())
jugar4tos(cuartosDeFinal[2], generaScore1(), cuartosDeFinal[3], generaScore2())
jugar4tos(cuartosDeFinal[4], generaScore1(), cuartosDeFinal[5], generaScore2())
jugar4tos(cuartosDeFinal[6], generaScore1(), cuartosDeFinal[7], generaScore2())

console.log(`===SEMIFINALES===`)
jugarsemifinal(semiFinales[0], generaScore1(), semiFinales[1], generaScore2())
jugarsemifinal(semiFinales[2], generaScore1(), semiFinales[3], generaScore2())
// console.log(`===TERCER Y CUARTO PUESTO===`)
// jugartercerYcuarto(semiFinales[1], generaScore1(), semiFinales[3], generaScore2())
console.log(`===FINAL===`)
jugarfinal(final[0], generaScore1(), final[1], generaScore2())





