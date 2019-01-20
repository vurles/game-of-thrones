/**
 * 
 * Acá va solo el manejo del DOM
 * 
 */
const perso = persoGOT(data);
const showPer = document.getElementById('btn');
const boxPer = document.getElementById('showMe');


showPer.addEventListener('click',() => {
    for(let i = 0;i < perso.length; i++){
        boxPer.innerHTML += '<p>'+perso[i]+'</p>'
    }
})