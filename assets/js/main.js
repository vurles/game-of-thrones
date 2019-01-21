const data = DATA.characters;// con esto veo la data de los personajes
const datos = EPISODES.episodes;// accedo a la data de los episodios.
//const perso = persoGOT(data);
//const showPer = document.getElementById('btn');
const boxPer = document.getElementById('showMe');//contenedor de personajes
const boxCap = document.getElementById('showTem')//contenedor de temporadas

//repaso
/*showPer.addEventListener('click',() => {
    for(let i = 0;i < perso.length; i++){
        boxPer.innerHTML += '<p>'+perso[i]+'</p>'
    }
})*/
//ejemplo de Ale para mostra, implementando forEach

const showPer = (data)=>{
let result = '';
data.forEach(element => {
    result = boxPer.innerHTML += `
        <div class="card">
        <div class="box">
            <h2>${element.characterName}</h2>
            <div class="img">
            <img src=${element.characterImageFull}>
            </div>
        </div>
        </div>` 
 } 
);
return result;
};
window.showPer = showPer(data);

const showTemporada = (datos)=>{
    let resultado = '';
    datos.forEach(element => {
        resultado = boxCap.innerHTML += `
            <div class="video">
                <h5>Titulo ${element.episodeTitle}</h5>
                <div "${element.episodeLink}"></div>
                <p>Este episodio se trata de : ${element.episodeDescription}</p>
                <p></p>
            </div>` 
} 
);
return resultado;
}

window.showTemporada = showTemporada(datos);