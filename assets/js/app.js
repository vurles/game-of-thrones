/**
 * 
 * Acá va solo la lógica
 * 
 */
const data = DATA.characters;
//console.log(data);

const persoGOT = (data) => {
    let personajes =[];
    for(i = 0; i < data.length; i++){
        personajes.push(data[i].characterName)
    }
    return personajes
}
