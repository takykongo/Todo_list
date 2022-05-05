let ajouter= document.querySelector("#boutton");
ajouter.addEventListener('click',function(e){
    e.preventDefault();
    let ecrire= document.querySelector('#text');
    let tche=`<div class="bloc">
<p class="taches">${ecrire.value}</p>
<button class="bou_cor"><p class="corbeilles"><i class="fa-solid fa-trash-can"></i></p></button>
</div>`;
    let grandediv=document.querySelector('#blocs');
    grandediv.innerHTML+=tche;
    ecrire.value=" ";
});