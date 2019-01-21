const datos = EPISODES.episodes;// accedo a la data de los episodios.
const boxCap = document.getElementById('showTem')//contenedor de temporadas
const selectCap = document.getElementById('capitulos')

const showTemporada = (datos)=>{
    let resultado = '';
    datos.forEach(element => {
        resultado = boxCap.innerHTML += `
            <div class="card">
                <h2>Titulo : ${element.episodeTitle}</h2>
                <h5>Temporada : ${element.seasonNum}</h5>
                <div class="video"  ...></div>
                <div class = "container">
                    <p>Este episodio se trata de : ${element.episodeDescription}</p>
                </div>
            </div>` //en el div card quiero mostrar las esenas pero por ahora esta vacio
} 
)
return resultado;
};// fin de capitulos

// filtrando por capitulos
selectCap.addEventListener('change', () => {
    let condition = selectCap.value;// hago una variable condition y le paso el valor de mi select con .value  
	let filtered = filterTem(datos, condition);// llamo a mi funcion que esta en data
    //se limpia el div para poder seleccionar any temporada;
	boxCap.innerHTML = "";
	
    filtered.forEach(element => {
        boxCap.innerHTML +=`
        <div class="card">
            <h2>Titulo : ${element.episodeTitle}</h2>
            <h5>Temporada : ${element.seasonNum}</h5>
            <div class="video"  ...></div>
            <div class = "container">
                <p>Este episodio se trata de : ${element.episodeDescription}</p>
            </div>
        </div>` 
    })
})
window.onload = showTemporada(datos);