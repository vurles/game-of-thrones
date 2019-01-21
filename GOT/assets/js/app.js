/**
 * 
 * Acá va solo la lógica
 * 
 */
//const data = DATA.characters;
//console.log(data);

/** const persoGOT = (data) => {
    let personajes =[];
    for(i = 0; i < data.length; i++){
        personajes.push(data[i].characterName)
    }
    return personajes
}
*/
//filtrar por temporadas ;)
const filterTem = (datos, condition) => {
    if(condition ==='0'){
return datos;
    }
   return datos.filter(element =>{
       return element.seasonNum === parseInt(condition);
   });
}
