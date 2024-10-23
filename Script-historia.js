let video1 = document.querySelector("video");
let tiempoActual;


const reproducir=()=>{
    video1.play()
    let duracion=document.querySelector(".showTime");
    duracion.textContent=video1.currentTime;
    tiempoActual=setInterval(() => {
        let duracion=document.querySelector(".showTime");
        duracion.textContent="00:"+video1.currentTime.toFixed(0);
    }, 1000)
}
    

const pausar=()=>{
    video1.pause();
    clearInterval(tiempoActual);
}


const transformarTiempo=(tiempo)=>{

}


let menu= document.querySelector('.menu');
let flag=false;
let contador=0;

const navChange=()=>{
    if(window.innerHeight*0.35 < window.scrollY  ){
        document.querySelector("nav").classList.add("fondoNav")
        
    }else{
    document.querySelector("nav").classList.remove("fondoNav")
    }
} 
function iniciar(){
    var imagenes=document.querySelectorAll('#cajaimagenes img');
    soltar=document.getElementById('cajasoltar');  
    soltar2  =document.getElementById('cajasoltar2'); 
    soltar3 = document.getElementById('cajasoltar3'); 

    for(var i=0; i<imagenes.length; i++){
    imagenes[i].addEventListener('dragstart', arrastrado, false);
    }

    soltar.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar.addEventListener('drop', soltado, false);


    soltar2.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar2.addEventListener('drop', soltado, false);


    soltar3.addEventListener('dragenter', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('dragover', function(e){
    e.preventDefault(); }, false);
    soltar3.addEventListener('drop', soltado, false);
}

function arrastrado(e){
    elemento=e.target;
    e.dataTransfer.setData('Text', elemento.getAttribute('id'));
}

async function soltado(e){
    e.preventDefault();
    console.log(e)
    let id=e.dataTransfer.getData('Text');
    let imagen=document.getElementById(id);
    imagen.style.display= 'none';
    e.target.innerHTML='<img src="'+imagen.src+'" height="400px" width="275px">';
    contador++
}


function reinicio() {
    window.location.reload();
}
iniciar()

