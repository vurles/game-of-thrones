const data = (DATA.characters);
//const perso = persoGOT(data);
//const showPer = document.getElementById('btn');
const boxPer = document.getElementById('showMe');

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
}
window.load = showPer(data);