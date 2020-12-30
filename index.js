const GrupoA = ["Chile", "Brasil"]
const GrupoB = ["Argentina", "Mexico"]
const GrupoC = ["Uruguay", "Venezuela"]
const GrupoD = ["Camerun", "Egipto"]
const GrupoE = ["Etiopia", "Inglaterra"]
const GrupoF = ["España", "Holanda"]
const GrupoG = ["Italia", "Francia"]
const GrupoH = ["Portugal", "Jamaica"]
const Eliminatorias = [GrupoA, GrupoB, GrupoC, GrupoD, GrupoE, GrupoF, GrupoG, GrupoH];
const Numero1 = Math.floor(Math.random() * 10);
const Numero2 = Math.floor(Math.random() * 10);

function Partido(equipo1, equipo2) {
    equipo1 = GrupoA[0] + Numero1;
    equipo2 = GrupoB[0] + Numero2;
    console.log(`${equipo1}-${equipo2}`)
    if (equipo1 > equipo2) {
        console.log(`Gana ${equipo1}`)
    }
    else if(equipo1 < equipo2) {
        console.log(`Gana ${equipo2}`)
    }
}
console.log(`Equipos Eliminatorias => ${Eliminatorias}`);
console.log("--OCTAVOS DE FINAL!!---")
Partido()
