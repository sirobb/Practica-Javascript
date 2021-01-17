const equipos = ["Chile", "Senegal", "Peru", "Islandia", "Austria", "Honduras", "Argentina", "Bosnia", "Colombia", "Venezuela", "Portugal", "Francia",
    "Holanda", "Iran", "Dinamarca", "Arabia Saudita", "Corea Del Sur", "Marruecos", "España", "Camerun", "Nigeria", "Japon", "Panama", "Inglaterra", "Brasil", "Italia", "EEUU", "Egipto", "Canada", "Rusia", "Uruguay", "Serbia"]
// const grupoA = new Grupo(), grupoB = new Grupo()
//     , grupoC = new Grupo(), grupoD = new Grupo()
//     , grupoE = new Grupo(), grupoF = new Grupo()
//     , grupoG = new Grupo(), grupoH = new Grupo()
    
console.log(equipos.length)
for (let i = [], i=0; i < equipos.length; i++) a[i]=i 
   
function shuffle(array) {
    let tmp, current, top = array.length;
    if (top) while(--top) {
        current = Math.floor(Math.random() * (top+1));
        tmp = array[current]
        array[current] = array[top];
        array[top]= tmp
    }
    return array
}
a= shuffle(equipos)